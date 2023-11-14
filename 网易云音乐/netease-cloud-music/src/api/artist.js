// 歌手相关数据

import ins from './request';

export async function getTopArtist(offset = 0, limit = 50) {
    const result = await ins.get('/top/artists', {
        params: {
            offset,
            limit,
        }
    });

    return result.data.artists;
}

/**
 * 根据ID获取歌手信息
 * @param {*} id 
 * @returns 
 */
export async function getSingerById(id) {
    const result = await ins.get('/artist/desc', {
        params: {
            id,
        }
    });
    return result.data;
}