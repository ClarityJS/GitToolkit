import { GitHub } from '../../../models/github/event/github.js';
export declare class Install {
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
    private app;
    constructor(options: GitHub, jwtToken: string);
    /**
     * 生成Github App 安装链接
     * @param stateId 可选，传入的 state_id, 随机字符串
     * @returns 返回安装链接对象
     * @returns state_id 随机生成的字符串，用于验证
     * @returns install_link 安装链接，用于跳转 Github 安装页
     */
    create_install_link(stateId?: string): Promise<{
        state_id: string;
        install_link: string;
    }>;
    /**
    * 生成Github Apps 配置链接
    * @param stateId 可选，传入的 state_id, 随机字符串
    * @returns 返回配置链接对象
    * @returns state_id 随机生成的字符串，用于验证
    * @returns  config_install_link 配置链接
    */
    create_config_install_link(stateId?: string): Promise<string>;
}
