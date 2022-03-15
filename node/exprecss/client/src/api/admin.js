// 管理员有关的方法

import request from './request';

/**
 * 管理员登录
 * @param {string} loginId id
 * @param {string} loginPwd 密码
 * @param {number} maxAge 多长时间不用再次登录
 */
export async function login(loginId, loginPwd, maxAge = 3600 * 24) {
    const result = await request().post('/api/admin/login', {
        loginId,
        loginPwd
    })
    return result.data;
}

/**
 * 获取登录用户的信息
 * @returns 
 */
export async function whoAmI() {
    const result = await request().get('/api/admin/whoami');
    return result.data;
}

/**
 * 退出登录
 */
export function logout() {
    localStorage.removeItem('my_school_token');
}