import request from './request';

// 登录

export async function login(params) {
    return await request.post('/passport/login', params)
}

// 获取验证码

export async function getCode(email) {
    return await request.post('/passport/getCode', {
        appkey: 'xyq_1643957776189',
        email
    })
}

// 注册

export async function logon(option) {
    return await request.post('/passport/logon', {
        appkey: 'xyq_1643957776189',
        ...option
    })
}