import ins from './request';

/**
 * 分页获取文章
 * @param {*} page 页码
 * @param {*} limit 每页数量
 * @param {*} categoryId 分类ID
 * @returns 
 */
export async function getArticleInfo(page = 1, limit = 10, categoryId) {
    const res = await ins.get("/api/article/info", {
        params: {
            page,
            limit,
            categoryId
        }
    })
    return res;
}

/**
 * 根据ID获取文章详情
 * @param {*} id 
 * @returns 
 */
export async function getArticleDetail(id) {
    const res = await ins.get("/api/article/" + id);
    return res;
}