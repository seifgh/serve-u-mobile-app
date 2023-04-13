import {ApiRequestConfig} from '@src/types';

export interface IRestApiService {
  sendHttpRequest<T>(params: ApiRequestConfig): Promise<T>;
}
