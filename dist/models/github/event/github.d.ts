import { App } from '../../../models/github/event/app.js';
import { Auth } from '../../../models/github/event/auth.js';
import { Install } from '../../../models/github/event/install.js';
import { Repo } from '../../../models/github/event/repo.js';
import type { GitHubAuthType } from '../../../types/index.js';
/**
 * Github API 基础类，发送请求，生成jwtToken 等操作
 */
export declare class GitHub {
    app: App;
    install: Install;
    repo: Repo;
    auth: Auth;
    BaseUrl: string;
    ApiUrl: string;
    jwtToken: string;
    APP_ID: string;
    Private_Key: string;
    Client_ID: string;
    Client_Secret: string;
    private state_id;
    private currentRequestConfig;
    constructor(options: GitHubAuthType);
    /**
     * 设置 token
     * @param token 传入的 token
     */
    setToken(token: string): void;
    /**
     * 获取当前随机生成的字符串 state_id
     * @returns 返回当前的 state_id
     */
    getStateId(): string;
    /**
     * 生成 JWT
     * @param options 生成 JWT 所需的参数
     * @param options.APP_ID GitHub App ID
     * @param options.Private_Key 私钥内容
     * @returns 返回生成的 JWT
     */
    private generate_jwt;
    /**
     * 创建唯一的state_id
     * @returns 返回生成的 state_id
     */
    private create_state;
    /**
   * 设置当前的 Request 配置，包括 URL 和 token
   * @param config 配置对象，包含 url 和 token
   * @param config.url 请求的 URL, 默认为 ApiUrl
   * @param config.token 请求的 token, 默认为 jwtToken
   */
    setRequestConfig(config: {
        url?: string;
        token?: string;
    }): void;
    /**
     * 创建一个请求实例，使用当前的 token
     * @returns 返回一个配置好的 Request 实例
     */
    private createRequest;
    /**
     * Github GET 请求方法
     * @param path 请求路径
     * @param parms 请求参数
     * @param customHeaders 请求头，选项
     * @returns 请求结果
     */
    get(path: string, parms?: any, customHeaders?: Record<string, string>): Promise<any>;
    /**
     * Github POST 请求方法
     * @param path 请求路径
     * @param data 请求数据
     * @param customHeaders 请求头，选项
     * @returns 请求结果
     */
    post(path: string, data: any, customHeaders?: Record<string, string>): Promise<any>;
}
