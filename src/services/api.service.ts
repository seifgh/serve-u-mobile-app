import {API_BASE_URL} from '@src/constants/api.constant';
import {IRestApiService} from '@src/interfaces';
import {ApiRequestConfig, ApiResponse} from '@src/types';
import {schemaUtil, URIUtil} from '@src/utils';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

class ApiService implements IRestApiService {
  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  sendHttpRequest<T>(config: ApiRequestConfig): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.httpClient<ApiResponse<T>>(
        this.transformRequestConfigsToAxiosRequestConfig(config),
      )
        .then(response => {
          resolve(this.handleResponseSuccess<T>(response));
        })
        .catch(err => reject(this.handleResponseError(err)));
    });
  }

  private handleResponseSuccess<T>(response: AxiosResponse<ApiResponse<T>>): T {
    return response.data.data;
  }

  private handleResponseError(error: AxiosError) {
    return error;
  }

  private transformRequestConfigsToAxiosRequestConfig(
    configs: ApiRequestConfig,
  ): AxiosRequestConfig {
    const {endpoint, body, queryParams, urlParams} = configs;

    return {
      url: URIUtil.formatURIWithParams(
        endpoint.url,
        schemaUtil.mapRecordBySchema(urlParams, endpoint.urlParamsSchema),
      ),
      params: URIUtil.formatQueryParams(
        schemaUtil.mapRecordBySchema(queryParams, endpoint.queryParamsSchema),
      ),
      // data: schemaUtil.mapRecordBySchema(body, endpoint.bodySchema),
      data: body,
      method: endpoint.method,
    };
  }
}

export const apiService = new ApiService();
