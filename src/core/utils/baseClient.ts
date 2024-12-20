import axios, { AxiosError, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { IResponse } from '../interfaces';
import { authService } from '@/services';
import { isNotifyWhenFail, jsonDecode } from '@/helpers';
import { removeAppToken } from '../auth';
import { message } from 'ant-design-vue';

interface ConfigInstance {
  setAuthorizationFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
}

interface Constructor {
  baseURL: string;
  headers?: any;
  noTransform?: boolean;
  withActionRefresh?: boolean;
  withActionLogout?: boolean;
}

export class BaseClient {
  private isRefreshing = false;
  private failedQueue: any[] = [];
  baseURL: string = '';
  headers: any = {};
  noTransform = false;
  withActionRefresh = false;
  withActionLogout = false;

  constructor({ baseURL, headers, noTransform, withActionRefresh, withActionLogout }: Constructor) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.noTransform = !!noTransform;
    this.withActionRefresh = !!withActionRefresh;
    this.withActionLogout = !!withActionLogout;
  }

  private processQueue(error: AxiosError | null, token = null) {
    this.failedQueue.forEach((item) => {
      if (error) {
        item.reject(error);
      } else {
        item.resolve(token);
      }
    });

    this.failedQueue = [];
  }

  private rejectErrorAndClearToken(error: AxiosError) {
    removeAppToken();

    if (this.withActionLogout) {
      window.location.href = `/login?returnUrl=${encodeURIComponent(window.location.pathname)}`;
    }

    return this.transformError(error);
  }

  private transformResponse(res: AxiosResponse): IResponse | AxiosResponse {
    if (this.noTransform) {
      return res;
    }

    const resData = res.data || {};
    const success = !!resData.success;
    return {
      success,
      error: !success,
      data: resData.data,
      statusCode: res?.status,
      message: resData.message,
      rawResponse: res,
    };
  }

  private transformError(error: AxiosError<any, any>): IResponse {
    const res = error.response;
    const resData = res?.data || {};
    return {
      success: false,
      error: true,
      data: resData.data,
      statusCode: res?.status || error.code,
      message: resData.message || error.message,
      rawResponse: res,
    };
  }

  create({ setAuthorizationFn }: ConfigInstance = {}) {
    const defaultSetAuthorizationFn = (config) => {
      const token: string = 'token';

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    };

    const api: AxiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      headers: {
        Accept: 'application/json',
        ...this.headers,
      },
    });

    api.interceptors.request.use((config) => {
      config.transformResponse = [(data) => data];

      if (!config.headers) {
        return config;
      }

      if (setAuthorizationFn) {
        return setAuthorizationFn(config);
      }

      defaultSetAuthorizationFn(config);

      return config;
    });

    api.interceptors.response.use(
      (response: AxiosResponse): any => {
        response.data = jsonDecode(response.data);

        if (isNotifyWhenFail(response)) {
          message.error(response.data?.message);
        }

        return this.transformResponse(response);
      },
      async (error: AxiosError) => {
        const originalRequest: any = error.config;
        const errorResponse: any = error?.response || {};
        errorResponse.data = jsonDecode(errorResponse.data);
        const statusCode: any = error?.response?.status;

        if (isNotifyWhenFail(errorResponse) && [422, 400, 403, 402].includes(statusCode)) {
          message.error(errorResponse.data?.message);
        }

        if (!this.withActionRefresh) {
          if (statusCode === 401 && this.withActionLogout) {
            return this.rejectErrorAndClearToken(error);
          }

          return this.transformError(error);
        }

        // Clear token and throw error when retried
        if (originalRequest._retry) {
          return this.rejectErrorAndClearToken(error);
        }

        // If refresh token is not valid and server response status == 401
        if (originalRequest.url === 'auth/refresh-token') {
          return this.rejectErrorAndClearToken(error);
        }

        // Handle if token is refreshing
        if (this.isRefreshing) {
          return new Promise((resolve, reject) => {
            this.failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              return api(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        // Set variables
        originalRequest._retry = true;
        this.isRefreshing = true;

        // Call request refresh token
        const res = await authService
          .refreshToken()
          .catch((err: AxiosError) => {
            this.processQueue(err);
            return this.rejectErrorAndClearToken(err);
          })
          .finally(() => {
            this.isRefreshing = false;
          });

        if (res && res?.success) {
          this.processQueue(null, res.payload.access_token);
          return Promise.resolve(api(originalRequest));
        }

        return this.rejectErrorAndClearToken(error);
      },
    );

    return api;
  }
}
