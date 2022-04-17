import request from '@/utils/request'

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