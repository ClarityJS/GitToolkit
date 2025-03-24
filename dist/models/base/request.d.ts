import { ResponseType } from '../../types/index.js';
declare class Request {
    private baseUrl;
    private authorization?;
    constructor(baseUrl: string, authorization?: string);
    private request;
    get(path: string, params?: any, customHeaders?: Record<string, string>): Promise<ResponseType>;
    post(path: string, data?: any, customHeaders?: Record<string, string>): Promise<ResponseType>;
    /**
     * 创建请求头
     * @returns 请求头对象
     */
    private createHeaders;
}
export default Request;
