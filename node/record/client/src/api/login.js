import axios from 'axios';

/**
 * 登录
 * @param {*} loginId 用户ID
 * @param {*} loginPwd 密码
 * @returns 
 */
export async function login(loginId, loginPwd) {
    const result = await axios.post('/api/admin/login', {
        loginId,
        loginPwd
    });
    return result.data;
}

/**
 * 获取用户信息
 * @returns
 */
export async function whoAmI() {
    const result = await axios.get('/api/admin/whoami');
    return result.data;
}

/**
 * 退出登录
 */
export function logout() {
    document.cookie = "my_record=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}