import { App } from '../../../models/github/event/app.js';
export class Install {
    get;
    post;
    BaseUrl;
    ApiUrl;
    jwtToken;
    APP_ID;
    Private_Key;
    Client_ID;
    Client_Secret;
    state_id;
    app;
    constructor(options, jwtToken) {
        this.get = options.get.bind(options);
        this.post = options.post.bind(options);
        this.APP_ID = options.APP_ID;
        this.Private_Key = options.Private_Key;
        this.Client_ID = options.Client_ID;
        this.Client_Secret = options.Client_Secret;
        this.ApiUrl = options.ApiUrl;
        this.BaseUrl = options.BaseUrl;
        this.jwtToken = jwtToken;
        this.state_id = options.getStateId();
        this.app = new App(options, jwtToken);
    }
    /**
     * 生成Github App 安装链接
     * @param stateId 可选，传入的 state_id, 随机字符串
     * @returns 返回安装链接对象
     * @returns state_id 随机生成的字符串，用于验证
     * @returns install_link 安装链接，用于跳转 Github 安装页
     */
    async create_install_link(stateId) {
        const state_id = stateId ?? this.state_id;
        const APP_Name = await this.app.get_name();
        return {
            state_id,
            install_link: `${this.BaseUrl}/apps/${APP_Name}/installations/new?state=${state_id}`
        };
    }
    /**
    * 生成Github Apps 配置链接
    * @param stateId 可选，传入的 state_id, 随机字符串
    * @returns 返回配置链接对象
    * @returns state_id 随机生成的字符串，用于验证
    * @returns  config_install_link 配置链接
    */
    async create_config_install_link(stateId) {
        const state_id = stateId ?? this.state_id;
        const APP_Name = await this.app.get_name();
        return `${this.BaseUrl}/apps/${APP_Name}/installations/select_target?state=${state_id}`;
    }
}
