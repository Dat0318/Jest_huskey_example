import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { stringify } from 'query-string';
import message from 'antd/lib/message';
// @ts-ignore
import CONFIG from '../../config/index.ts';
// @ts-ignore
import { tokenManager } from './tokenManager.tsx';

const authorizedRequest: AxiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // @ts-ignore
  paramsSerializer: (params) => {
    return stringify(params, { arrayFormat: 'separator' });
  },
});

authorizedRequest.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  const { token } = tokenManager;
  // @ts-ignore
  newConfig.headers.common.Authorization = token && token !== 'guest' ? `Bearer ${token}` : '';
  return newConfig;
});

authorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error && error.response && error.response.status === 401) {
      message.error('Session expired');
    }
    throw error;
  }
);

export default authorizedRequest;
