import { pkgType } from '../types/index.js';
export declare const basePath: string;
export declare const dirPath: string;
/**
 * 读取 JSON 文件
 * @param file 文件名
 * @param root 根目录
 * @returns JSON 对象
 */
export declare function readJSON(file?: string, root?: string): Promise<any>;
export declare const pkg: pkgType;
