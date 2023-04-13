export class InvalidApiEndpointBody extends Error {
  constructor() {
    super('INVALID_API_BODY');
  }
}

export class InvalidApiEndpointUrlParams extends Error {
  constructor() {
    super('INVALID_API_URL_PARAMS');
  }
}

export class InvalidApiEndpointQueryParams extends Error {
  constructor() {
    super('INVALID_API_QUERY_PARAMS');
  }
}
