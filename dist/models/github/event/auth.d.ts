import { GitHub } from '../../../models/github/event/github.js';
export declare class Auth {
    private options;
    private get;
    private post;
    private BaseUrl;
    private ApiUrl;
    private state_id;
    private Client_ID;
    private jwtToken;
    constructor(options: GitHub, jwtToken: string);
    /**
     * 生成Github App 授权链接
     * @returns 返回授权链接对象
     * @returns state_id 随机生成的字符串，用于验证
     * @returns auth_link 授权链接，用于跳转 Github 授权页
     */
    create_auth_link(): {
        state_id: string;
        auth_link: string;
    };
    /**
     * 通过 code 获取 token
     * @param code Github 返回的 code
     * @returns 返回 token
     */
    get_token_by_code(code: string): Promise<any>;
    /**
     * 通过 refresh_token 获取 token
     * @param refresh_token Github 返回的 refresh_token
     * @returns 返回 token
     */
    refresh_token(refresh_token: string): Promise<any>;
    /**
     * 获取 token 的状态
     * 暂时没写
     * @param token token Github Apps 生成的用户的token，也就是 `get_token_by_code` 生成的 token
     * @returns 返回 token 的状态
     */
    check_token_status(token: string): Promise<void>;
}
