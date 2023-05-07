export type prependTLSOptions = {
  httpOnly?: boolean;
};

const prependTLS = (url: string, options?: prependTLSOptions): string => {
  const httpsRegex = /^(https:\/\/).*$/gis;
  const httpOnlyRegex = /^(http:\/\/).*$/gis;
  const httpScheme = 'http://';
  const httpsScheme = 'https://';
  const containsHttps = url.match(httpsRegex);
  const containsHttp = url.match(httpOnlyRegex);
  const { httpOnly } = options ? options : { httpOnly: false };

  if (containsHttps) {
    if (httpOnly) {
      return url.replace(httpsScheme, httpScheme);
    } else {
      return url;
    }
  } else {
    if (httpOnly) {
      if (containsHttp) {
        return url;
      } else {
        return `${httpScheme}${url}`;
      }
    } else {
      if (containsHttp) {
        return url.replace(httpScheme, httpsScheme);
      } else {
        return `${httpsScheme}${url}`;
      }
    }
  }
};

export default prependTLS;
