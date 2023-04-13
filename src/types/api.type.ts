import {DeepPrimitiveTypeSchema, SchemaValueType} from './global.type';

export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

export type BaseApiEndpoint = {
  url: string;
  method: HttpMethod;
};

export type ApiEndpoint = BaseApiEndpoint & {
  queryParamsSchema?: Record<string, SchemaValueType>;
  urlParamsSchema?: Record<string, SchemaValueType>;
  bodySchema?: DeepPrimitiveTypeSchema;
};

export type ApiRequestConfig = {
  endpoint: ApiEndpoint;
  body: Record<string, any>;
  urlParams: Record<string, any>;
  queryParams: Record<string, any>;
  showLoader: boolean;
  showToastError: boolean;
};
