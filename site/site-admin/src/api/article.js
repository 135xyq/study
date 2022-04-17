import request from "@/utils/request";

/**分页获取文章
 * @param {number} page 页数
 * @param {number} limit 每页数量
 * @returns
 */
export async function getArticle(page = 1, limit = 10) {
    const res = await request.get('/api/article', {
        params: {
            page,
            limit
        }
    });
    return res.data;
}

/**
 * 删除一篇文章
 * @param {*} id 文章ID
 * @returns
 */
export async function deleteArticle(id) {
    const res = await request.delete('/api/article/' + id);
    return res.data;
}

/**
 * 修改文章内容
 * @param {*} id
 */
export async function editArticle(id, articleObj) {
    const res = await request.put('/api/article/' + id, articleObj);
    return res.data;
}

/**
 * 新增一篇文章
 * @param {*} articleObj 文章内容
 * @returns
 */
export async function addArticle(articleObj) {
    const res = await request.post('/api/article', articleObj);
    return res.data;
}