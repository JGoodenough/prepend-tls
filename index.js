export default prependTLS = (
  url,
  { httpOnly = false, customSubDomain = 'www', includeSubDomain = false }
) => {
  const httpsRegex = /^(https:\/\/|http:\/\/)(www\.)?.*/gis;
  const scheme = httpOnly ? 'http://' : 'https://';
  const containsHttpsRegex = url.match(httpsRegex);
  const subDomain = includeSubDomain ? customSubDomain : '';
  const newURL = !containsHttpsRegex ? `${scheme}${subDomain}.${url}` : url;
  return newURL;
};
