import request from './request.js';
import store from '@/store';

const appkey = store.state.appkey;

/**
 * 获取当前位置
 * @returns
 */
export async function getPosition() {
    return await request.get('/api/meituan/city/getPosition.json', {
        params: {
            appkey
        }
    })
}

/**
 * 获取城市列表
 * @returns
 */
export async function getCityList() {
    return await request.get('/api/meituan/city/cityList.json', {
        params: {
            appkey,
        }
    })
}

/**
 * 获取热门城市
 * @returns
 */
export async function getHotCity() {
    return await request.get('/api/meituan/city/hot.json', {
        params: {
            appkey,
        }
    })
}

/**
 * 获取最近搜索
 * @returns
 */
export async function getRecentCity() {
    return await request.get('/api/meituan/city/recents.json', {
        params: {
            appkey,
        }
    })
}

/**
 * 获取省份信息
 * @returns
 */
export async function getProvince() {
    return await request.get('/api/meituan/city/province.json', {
        params: {
            appkey,
        }
    })
}