import request from '@/utils/request'

/**
 * 新增一个分类
 * @param {*} 分类数据
 * @returns
 */
export function addCategory(data) {
    return request({
        url: '/api/category',
        method: 'POST',
        data,
    })
}

/**
 * 获取分类
 * @returns
 */
export async function getCategory() {
    const res = await request.get('/api/category');
    return res.data;
}