import { GitHub } from '../../../models/github/event/github.js';
export declare class Repo {
    private options;
    private get;
    private post;
    private BaseUrl;
    private ApiUrl;
    private jwtToken;
    constructor(options: GitHub, jwtToken: string);
    get_repo_info(): Promise<any>;
}
