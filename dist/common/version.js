import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const filePath = fileURLToPath(import.meta.url).replace(/\\/g, '/');
export const basePath = path.resolve(filePath, '../../../').replace(/\\/g, '/');
export const dirPath = path.resolve(filePath, '../../').replace(/\\/g, '/');
/**
 * 读取 JSON 文件
 * @param file 文件名
 * @param root 根目录
 * @returns JSON 对象
 */
export async function readJSON(file = '', root = '') {
    root = root || basePath;
    try {
        const filePath = `${root}/${file}`;
        await fs.access(filePath);
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    }
    catch (e) {
        console.error(`读取 JSON 文件失败: ${file}`);
        return {};
    }
}
export const pkg = await readJSON('package.json');
