export class App {
    options;
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
    constructor(options, jwtToken) {
        this.options = options;
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
    }
    /**
     * 获取当前 Github App 信息
     * @returns 返回 Github App 信息
     */
    async get_info() {
        this.options.setRequestConfig({
            url: this.ApiUrl,
            token: this.jwtToken
        });
        const res = await this.get('/app');
        return res;
    }
    async get_name() {
        return (await this.get_info()).name;
    }
}
