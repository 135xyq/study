// 歌单的相关数据


import ins from './request'

/**
 * 可获取歌单分类,包含 category 信息
 * @returns 
 */
export async function getPlayListType() {
    const result = await ins.get('/playlist/catlist');
    return result.data;
}

/**
 * 根据歌单ID获取歌单信息
 * @param {*} id 
 * @returns 
 */
export async function getPlayListDetailById(id) {
    const result = await ins.get('/playlist/detail', {
        params: {
            id,
        }
    });
    return result.data;
}