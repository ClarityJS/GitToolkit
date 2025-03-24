import { ApiType, proxyUrlType } from '../../types/index.js';
/**
 * 获取API基础URL方法
 * @param type GIt类型, 默认github, 可选gitee, gitcode
 * @param proxyUrl 代理URL，可选，默认不使用
 * @returns 返回URL
 */
export declare function ApiBaseUrl(type?: ApiType, proxyUrl?: proxyUrlType): string;
/**
 * 获取基础URL方法
 * @param type GIt类型, 默认github, 可选gitee, gitcode
 * @param proxyUrl 代理URL，可选，默认不使用
 * @returns 返回URL
 */
export declare function BaseUrl(type?: ApiType, proxyUrl?: proxyUrlType): string;
