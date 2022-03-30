// 获取推荐需要的数据

import ins from './request';

export async function getBanner(type = 0) {
    const result = await ins.get('/banner', {
        params: {
            type
        }
    });

    return result.data.banners;
}