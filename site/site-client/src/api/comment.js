import ins from "./request"

/**
 * 评论
 * @param {*} obj 要包含文章ID
 * @returns 
 */
export async function postComment(obj) {
    const res = await ins.post('/api/comment', obj);
    return res;
}