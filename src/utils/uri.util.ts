export const URIUtil = {
  formatQueryParams(
    queryParams?: Record<string, string | number>,
  ): Record<string, string> | undefined {
    if (queryParams === undefined) {
      return undefined;
    }

    const formattedQueryParams: Record<string, string> = {};

    Object.keys(queryParams).forEach(key => {
      formattedQueryParams[key] = encodeURIComponent(queryParams[key]);
    });

    return formattedQueryParams;
  },

  /**
   * Example:
   ** URI: http://example.com/test/:id
   ** URIParams: {id: 1}
   ** result: http://example.com/test/1
   */
  formatURIWithParams(
    URI: string,
    URIParams?: Record<string, string | number>,
  ): string {
    if (URIParams === undefined) {
      return URI;
    }
    let formattedURI = URI;
    Object.keys(URIParams).forEach(key => {
      const paramValue = URIParams[key];
      formattedURI = formattedURI.replace(`:${key}`, paramValue.toString());
    });

    return formattedURI;
  },
};
