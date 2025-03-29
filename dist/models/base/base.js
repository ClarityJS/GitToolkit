/**
 * 获取API基础URL方法
 * @param type GIt类型, 默认github, 可选gitee, gitcode
 * @param proxyUrl 代理URL，可选，默认不使用
 * @returns 返回URL
 */
export function ApiBaseUrl(type, proxyUrl) {
    const urlMap = {
        github: 'api.github.com',
        gitee: 'gitee.com/api/v5',
        gitcode: 'api.gitcode.com/api/v5'
    };
    return `https://${proxyUrl?.replace(/\/$/, '') ?? ''}/${urlMap[type ?? 'github']}`.replace(/\/$/, '');
}
/**
 * 获取基础URL方法
 * @param type GIt类型, 默认github, 可选gitee, gitcode
 * @param proxyUrl 代理URL，可选，默认不使用
 * @returns 返回URL
 */
export function BaseUrl(type, proxyUrl) {
    const urlMap = {
        github: 'github.com',
        gitee: 'gitee.com',
        gitcode: 'gitcode.com'
    };
    return `https://${proxyUrl?.replace(/\/$/, '') ?? ''}/${urlMap[type ?? 'github']}`.replace(/\/$/, '');
}
