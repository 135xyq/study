// jwt验证

const jwt = require('jsonwebtoken');
const secret = 'hszmyall'; //秘钥
const cookieKey = 'schoolToken'; //cookie的名字

/**
 * 生成jwt令牌
 * @param {*} res 请求结果
 * @param {number} expiresIn 最大保存时间
 * @param {object}} info 存储信息
 */
exports.publish = function(res, expiresIn = 3600 * 24, info = {}) {
    const token = jwt.sign(info, secret, {
        expiresIn,
    });
    // 添加到cookie
    res.cookie(cookieKey, token, {
        maxAge: expiresIn * 1000,
        path: '/'
    })

    // 添加到到其他
    res.header('authorization', token)
}

/**
 * 验证jwt令牌的合法性
 * @param {*} req 请求头
 */
exports.verification = function(req) {
    let token;
    // 从cookie中获取
    token = req.cookies[cookieKey];
    if (!token) {
        // cookie中没有，继续获取authorization
        token = req.headers.authorization;
        if (!token) {
            // authorization也没有,验证不通过
            return null;
        }
        // 将token按照空格分开防止bearer
        token = token.split(' ');
        token = token.length === 1 ? token[0] : token[1];
    }
    try {
        const result = jwt.verify(token, secret);
        return result;
    } catch (error) {
        // 验证不通过
        return null;
    }
}