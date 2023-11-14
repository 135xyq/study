// 日志记录

const log4js = require('log4js');
const log = require('../logger');


module.exports = log4js.connectLogger(log.apiLogger, {
    level: 'auto'
})