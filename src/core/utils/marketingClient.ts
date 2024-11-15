import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { BaseClient } from './baseClient';

function setAuthorizationFn(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem('app_access_token');

  if (token) {
    config.headers['Authorization'] = token;
  }

  return config;
}

export const marketingClient: AxiosInstance = new BaseClient({
  baseURL: `${import.meta.env.VITE_MARKERING_API}`,
  withActionLogout: true,
}).create({ setAuthorizationFn });
