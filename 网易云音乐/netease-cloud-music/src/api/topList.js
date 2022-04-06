// 获取排行榜数据

import ins from './request';

/**
 * 获取歌单歌曲
 * @param {*} id 
 * @returns 
 */
export async function getPlayListDetail(id) {
    const result = await ins.get('/playlist/detail', {
        params: {
            id
        }
    });
    return result.data.playlist;
}

/**
 * 获取排行榜各歌单信息
 * @returns 
 */
export async function getTopListDetail() {
    const result = await ins.get('/toplist/detail');
    return result.data.list;
}


/**
 * 获取歌单
 */

export async function getTopPlayList(order = "hot", cat = "全部", limit = 35, offset = 0) {
    const res = await ins.get('/top/playlist', {
        params: {
            order,
            cat,
            limit,
            offset
        }
    })
    return res.data;
}