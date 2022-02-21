import request from './request.js';
import store from '@/store';

const appkey = store.state.appkey;


/**
 * 获取左侧导航栏数据
 * @returns
 */
export async function getNav() {
    return await request.get('/api/meituan/index/nav.json', {
        params: {
            appkey
        }
    })
}