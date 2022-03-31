// 获取推荐需要的数据

import ins from './request';

/**
 * 获取头部轮播图
 * @param {*} type 
 * @returns 
 */
export async function getBanner(type = 0) {
    const result = await ins.get('/banner', {
        params: {
            type
        }
    });

    return result.data.banners;
}

/**
 * 获取热门推荐
 * @param{*} limit取出来的数量
 * @returns 
 */
export async function getHotDiscover(limit = 8) {
    const result = await ins.get('/personalized', {
        params: {
            limit
        }
    });
    return result.data.result;
}

/**
 * 个性化推荐
 * @returns 
 */
export async function getPersonalDiscover() {
    try {
        const result = await ins.get('/recommend/resource');
        return result.data.recommend;
    } catch {
        return null;
    }
}