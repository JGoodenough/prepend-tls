exports.prependTLSProtocol = function (url) {
  const httpsRegex = /^(https:\/\/www\.).*/gis;
  const containsHttpsRegex = url.match(httpsRegex);
  const newURL = !containsHttpsRegex ? `https://www.${url}` : url;
  return newURL;
}