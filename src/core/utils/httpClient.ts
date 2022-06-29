import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { IResponse, IErrorResponse } from '../interfaces';
import { authService } from '@/services';

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: AxiosError | null, token = null) => {
  failedQueue.forEach((item) => {
    if (error) {
      item.reject(error);
    } else {
      item.resolve(token);
    }
  });

  failedQueue = [];
};

function rejectErrorAndClearToken(error: AxiosError) {
  return Promise.reject(error);
}

function tranformRespose(res: AxiosResponse): IResponse {
  const success = res.data?.code === 'SUCCESS' ? true : false;
  const errorText = success ? null : res.data?.message;
  return { data: res.data.payload, statusCode: res.status, success, errorText };
}

function tranformError(res?: AxiosResponse<any, any>): IErrorResponse {
  const errorText = res?.data?.message;
  return { data: res?.data.payload, statusCode: res?.status, success: false, errorText };
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = 'token';
    if (!config.headers) {
      return config;
    }

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse): IResponse => {
    return tranformRespose(response);
  },
  async (error: AxiosError) => {
    const originalRequest: any = error.config;

    // Only handle when status == 401
    if (error?.response?.status !== 401) {
      const tranformedErrorResponse = tranformError(error?.response);

      return Promise.reject(tranformedErrorResponse);
    }

    // Clear token and throw error when retried
    if (originalRequest._retry) {
      return rejectErrorAndClearToken(error);
    }

    // If refresh token is not valid and server response status == 401
    if (originalRequest.url === 'auth/refresh-token') {
      return rejectErrorAndClearToken(error);
    }

    // Handle if token is refreshing
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
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
    isRefreshing = true;

    // Call request refresh token
    const res = await authService
      .refreshToken()
      .catch((err: AxiosError) => {
        processQueue(err);
        return rejectErrorAndClearToken(err);
      })
      .finally(() => {
        isRefreshing = false;
      });

    if (res && res?.code === 'SUCCESS') {
      processQueue(null, res.payload.access_token);
      return Promise.resolve(api(originalRequest));
    }

    return rejectErrorAndClearToken(error);
  }
);

export default api;
