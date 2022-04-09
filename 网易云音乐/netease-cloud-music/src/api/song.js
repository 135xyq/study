// 歌曲的相关

import ins from './request';

/**
 * 获取歌曲播放链接
 * @param {*} id 
 * @returns 
 */
export async function getSongUrl(id) {
    const res = await ins.get('/song/url', {
        params: {
            id
        }
    });
    return res.data.data;
}

/**
 * 获取歌曲详情
 * @param {*} ids 
 */
export async function getSongDetail(ids) {
    const res = await ins.get('/song/detail', {
        params: {
            ids
        }
    });
    return res.data;
}