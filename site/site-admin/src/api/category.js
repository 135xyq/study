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

/**
 * 根据ID删除一个分类，删除分类要删除分类下的所有文章
 * @param {*} id
 * @returns
 */
export async function deleteCategory(id) {
    const res = await request.delete('/api/category/' + id);
    return res.data;
}

/**
 * 根据分类ID获取文章
 * @param {*} id
 * @returns
 */
export async function getCategoryArticle(id) {
    const res = await request.get('/api/category/' + id);
    return res.data;
}