import request from './request';

/**
 * 获取每日一句
 * @returns 
 */
export async function getDaily() {
    const res = await request.get('/api/daily');
    return res;
}