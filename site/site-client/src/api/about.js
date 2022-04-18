import ins from "./request"

/**
 * 获取关于我的内容
 * @returns 
 */
export async function getAbout() {
    const res = await ins.get('/api/about');
    return res;
}