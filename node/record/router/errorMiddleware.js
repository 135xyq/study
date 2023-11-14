// 处理错误的中间件
const getMsg = require('./getSendResult');
const multer = require('multer');

module.exports = (err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(200).send(getMsg.getError(err.message));
            return;
        }
        const errObj = err instanceof Error ? err.message : err;
        res.status(500).send(getMsg.getError(errObj));
    } else {
        next();
    }
}