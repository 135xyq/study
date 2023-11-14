// 处理token验证的中间件
const getMsg = require('./getSendResult');
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

    // 使用jwt验证
    const verifyResult = jwt.verification(req);

    if (verifyResult) {
        // 验证通过
        req.userId = verifyResult.id;
        next();
    } else {
        // 验证不通过
        res.status(403).send(getMsg.getError('权限不够,禁止操作！', 403));
    }
}