// 登录相关的api

import ins from './request';

/**
 * 通过手机号登录
 * @param {*} phone 手机号
 * @param {*} password 密码
 * @returns 
 */
export async function loginByPhone(phone, password) {
    const result = await ins.get('/login/cellphone', {
        params: {
            phone,
            password
        }
    })
    if (result.data.code === 200) {
        return result.data.account;
    } else {
        return null;
    }
}

/**
 * 邮箱登录
 * @param {*} email 邮箱
 * @param {*} password 密码
 * @returns 
 */
export async function loginByEmail(email, password) {
    const result = await ins.get('/login', {
        params: {
            phone,
            password
        }
    })
    if (result.data.code === 200) {
        return result.data.data.account;
    } else {
        return null;
    }
}

/**
 * 生成二维码需要的key
 * @returns 
 */
export async function createKey() {
    const date = new Date().getTime();
    const key = await ins.get('/login/qr/key', {
        params: {
            timestamp: date
        }
    });
    return key.data.data.unikey;
}

/**
 * 生成二维码
 */
export async function createQr(key) {
    const date = new Date().getTime();
    const result = await ins.get('/login/qr/create', {
        params: {
            key,
            timestamp: date
        }
    })
    return result.data.data.qrurl;
}

/**
 * 返回二维码状态 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
 * @param {*} key 
 * @returns 
 */
export async function qrStatus(key) {
    const date = new Date().getTime();
    const result = await ins.get('/login/qr/check', {
        params: {
            key,
            timestamp: date
        }
    })
    return result.data;
}

/**
 * 刷新登录状态
 * @returns 
 */
export async function refresh() {
    const result = await ins.get('/login/refresh');
    return result.data;
}

/**
 * 返回登录状态
 * @returns 
 */
export async function loginStatus() {
    const result = await ins.get('/login/status');
    return result.data.data.account;
}

/**
 * 退出登录
 */
export async function logout() {
    await ins.get('/logout');
}

/**
 * 发送验证码
 * @param {*} phone 
 */
export async function sendCaptcha(phone) {
    await ins.get('/captcha/sent', {
        params: {
            phone,
        }
    })
}

/**
 * 验证验证码是否正确
 * @param {*} phone 手机号
 * @param {*} captcha 验证码
 */
export async function captchaVerify(phone, captcha) {
    const result = await ins.get('/captcha/verify', {
        params: {
            phone,
            captcha
        }
    })
    return result.data.data;
}