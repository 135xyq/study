const jwt = require('jsonwebtoken');
const secret = 'hszmyall';
const cookieKey = 'my_record';

function publish(res, info = {}, maxAge = 24 * 3600) {
    const token = jwt.sign(info, secret, {
            expiresIn: maxAge
        })
        // 加入cookie
    res.cookie(cookieKey, token, {
        maxAge: maxAge * 1000,
        path: '/'
    })

    res.header('authorization', token);
}

function verification(req) {
    let token;
    token = req.cookies[cookieKey];
    if (!token) {
        token = req.headers.authorization;
        if (!token) {
            return null;
        }
    }
    token = token.split(' ');
    token = token.length === 1 ? token[0] : token[1];
    try {
        const result = jwt.verify(token, secret);
        return result;
    } catch (error) {
        // 验证不通过
        return null;
    }
}


module.exports = {
    publish,
    verification
}