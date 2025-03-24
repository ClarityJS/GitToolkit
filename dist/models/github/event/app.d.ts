import { GitHub } from '../../../models/github/event/github.js';
import type { GitHubAppInfoType } from '../../../types/index.js';
export declare class App {
    private options;
    private get;
    private post;
    private BaseUrl;
    private ApiUrl;
    private jwtToken;
    private APP_ID;
    private Private_Key;
    private Client_ID;
    private Client_Secret;
    private state_id;
    constructor(options: GitHub, jwtToken: string);
    /**
     * 获取当前 Github App 信息
     * @returns 返回 Github App 信息
     */
    get_info(): Promise<GitHubAppInfoType>;
    get_name(): Promise<string>;
}
