import { describe, expect, it } from 'vitest';
import prependTLS from './index';

describe('prepend-tls', () => {
  it('should prepend https:// to url', () => {
    const url = 'jessegoodenough.com';
    expect(url).toEqual(url);
    const newURL = prependTLS(url);
    expect(newURL).toEqual(`https://${url}`);
  });

  it('should prepend http:// to url', () => {
    const url = 'jessegoodenough.com';
    expect(url).toEqual(url);
    const newURL = prependTLS(url, { httpOnly: true });
    expect(newURL).toEqual(`http://${url}`);
  });

  it('should return https:// url unchanged', () => {
    const url = 'https://jessegoodenough.com';
    expect(url).toEqual(url);
    const newURL = prependTLS(url);
    expect(newURL).toEqual(url);
  });

  it('should return http:// url unchanged', () => {
    const url = 'http://jessegoodenough.com';
    expect(url).toEqual(url);
    const newURL = prependTLS(url, { httpOnly: true });
    expect(newURL).toEqual(url);
  });

  it('should return https:// url for http:// when httpOnly is false', () => {
    const url = 'http://jessegoodenough.com';
    expect(url).toEqual(url);
    const newURL = prependTLS(url);
    expect(newURL).toEqual('https://jessegoodenough.com');
  });

  it('should return http:// for https:// when httpOnly option is true', () => {
    const url = 'https://jessegoodenough.com';
    expect(url).toEqual(url);
    const newURL = prependTLS(url, { httpOnly: true });
    expect(newURL).toEqual('http://jessegoodenough.com');
  });
});
