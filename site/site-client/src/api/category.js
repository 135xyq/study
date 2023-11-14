import ins from "./request"

/**
 * 获取全部分类
 * @returns 
 */
export async function getCategory() {
    const res = await ins.get("/api/category");
    return res;
}

/**
 * 根据分类ID获取分类下的文章
 * @param {*} id 
 * @returns 
 */
export async function getCategoryArticle(id) {
    const res = await ins.get("/api/category/" + id);
    return res;
}