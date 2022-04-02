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
    return result.data.playlist.tracks;
}