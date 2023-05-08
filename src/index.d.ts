export type prependTLSOptions = {
    httpOnly?: boolean;
};
declare const prependTLS: (url: string, options?: prependTLSOptions) => string;
export default prependTLS;
