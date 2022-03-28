// 获取用户信息

import ins from './request';

/**
 * 获取用户账号信息
 * @returns 
 */
export async function userAccount() {
    const result = await ins.get('/user/account');
    return result.data.account;
}

/**
 * 获取用户详情
 */

export async function userInfoDetail(id) {
    if (!id) {
        return null;
    }
    const result = await ins.get('/user/detail', {
        params: {
            uid: id
        }
    });
    return result.data;
}