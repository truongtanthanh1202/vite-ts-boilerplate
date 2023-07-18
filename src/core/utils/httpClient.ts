import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { BaseClient } from './baseClient';

export const httpClient: AxiosInstance = new BaseClient({
  baseURL: import.meta.env.VITE_API_URL,
}).create({
  setAuthorizationFn: (config: InternalAxiosRequestConfig) => {
    const token: string = 'token';

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
});
