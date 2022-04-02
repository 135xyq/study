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