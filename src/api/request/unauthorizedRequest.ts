import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { stringify } from 'query-string';
// @ts-ignore
import CONFIG from '../../config/index.ts';

export const unauthorizedRequest: AxiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // @ts-ignore
  // paramsSerializer: (params) => {
  //   return stringify(params, { arrayFormat: 'comma' });
  // },
});

unauthorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    response.data.status = response.status;
    return response.data;
  },
  (error: AxiosError) => {
    // throw error;

    const { response } = error;
    throw {
      status: response?.status || 400,
      data:
        typeof response?.data === 'object'
          ? response.data
          : {
              message: response?.data,
            },
    };
  }
);

export default unauthorizedRequest;
