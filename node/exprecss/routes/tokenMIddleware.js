// 处理token验证的中间件
const getMag = require('./getSendResult');
const crypt = require("../utils/crypt");
const needTokenArr = require('./needTokenApi');
const { pathToRegexp } = require('path-to-regexp');
const jwt = require('./jwt');

module.exports = (req, res, next) => {
    // 找出当前的访问地址是否需要token
    const result = needTokenArr.filter(item => {
        const reg = pathToRegexp(item.path);
        return item.method === req.method && reg.test(req.path);
    })
    if (result.length === 0) {
        // 不需要token
        next();
        return;
    }

    // let token = req.cookies.token;
    // if (!token) {
    //     // 如果token不存在，则找authorization
    //     token = req.headers.authorization;
    // }
    // if (!token) {
    //     // 验证不通过
    //     res.status(403).send(getMag.getErr('权限不够,禁止操作！', 403));
    //     return;
    // }
    // // 验证通过，移交下一个中间件
    // const userId = crypt.decrypt(token);
    // req.userId = userId;
    // next();

    // 使用jwt验证
    const verifyResult = jwt.verification(req);

    if (verifyResult) {
        // 验证通过
        req.userId = verifyResult.id;
        next();
    } else {
        // 验证不通过
        res.status(403).send(getMag.getErr('权限不够,禁止操作！', 403));
    }
}