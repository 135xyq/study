import ins from './request';

// 评论相关数据

/**
 * 根据歌单ID获取评论
 * @param {*} id 
 * @returns 
 */
export async function getPlayListComment(id, offset = 0, limit = 20) {
    const result = await ins.get('/comment/playlist', {
        params: {
            id,
            offset,
            limit
        }
    });

    return result.data;
}