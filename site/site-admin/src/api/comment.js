import request from "@/utils/request";

/**
 * 分页获取评论
 * @param {*} page 页码
 * @param {*} limit 数量
 * @returns
 */
export async function getComment(page, limit) {
    const res = await request.get("/api/comment", {
        params: {
            page,
            limit
        }
    })
    return res.data;
}

/**
 * 删除评论
 * @param {*} id
 * @returns
 */
export async function deleteComment(id) {
    const res = await request.delete("/api/comment/" + id);
    return res.data
}