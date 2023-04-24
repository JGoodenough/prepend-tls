const prependTLS = (url, { httpOnly = false } = {}) => {
  const httpsRegex = /^(https:\/\/).*$/gis;
  const httpOnlyRegex = /^(http:\/\/).*$/gis;
  const httpScheme = 'http://';
  const httpsScheme = 'https://';
  const containsHttps = url.match(httpsRegex);
  const containsHttp = url.match(httpOnlyRegex);

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
