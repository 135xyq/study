import request from './request';

// 登录

export async function login(params) {
    return await request.post('/passport/login', params)
}

// 获取验证码

export async function getCode(email) {
    return await request.post('/passport/getCode', {
        email
    })
}

// 注册

export async function logon(option) {
    return await request.post('/passport/logon', {
        ...option
    })
}

// 找回密码

export async function findBack(option) {
    return await request.post('/passport/findBack', {
        ...option
    })
}

// 修改用户信息

export async function changeUserInfo(option) {
    return await request.put('/passport/changeUserInfo', {
        ...option
    })
}