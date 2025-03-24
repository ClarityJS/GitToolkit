export class Repo {
    options;
    get;
    post;
    BaseUrl;
    ApiUrl;
    jwtToken;
    constructor(options, jwtToken) {
        this.options = options;
        this.get = options.get.bind(options);
        this.post = options.post.bind(options);
        this.ApiUrl = options.ApiUrl;
        this.BaseUrl = options.BaseUrl;
        this.jwtToken = jwtToken;
    }
    get_repo_info() {
        return this.get('/user/repos');
    }
}
