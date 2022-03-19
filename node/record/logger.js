// 日志记录

const log4js = require('log4js');
const path = require('path');

log4js.configure({
    appenders: {
        sql: {
            type: 'dateFile',
            filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log'),
            maxLogSize: 2 ** 20,
            keepFileExt: true,
            layout: {
                type: 'pattern',
                pattern: '%c: %d{yyyy-MM-dd hh:mm:ss} %p  %m%n' //写入文件的格式
            }
        },
        api: {
            type: 'dateFile',
            filename: path.resolve(__dirname, 'logs', 'api', 'logging.log'),
            maxLogSize: 2 ** 20,
            keepFileExt: true,
            layout: {
                type: 'pattern',
                pattern: '%c: %d{yyyy-MM-dd hh:mm:ss} %p  %m%n' //写入文件的格式
            }
        },
        default: {
            type: 'stdout'
        }
    },
    categories: {
        sql: {
            appenders: ['sql'],
            level: 'all'
        },
        api: {
            appenders: ['api'],
            level: 'all'
        },
        default: {
            appenders: ['default'],
            level: 'all'
        }
    }
})

process.on('exit', () => {
    log4js.shutdown();
})

const sqlLogger = log4js.getLogger('sql');
const apiLogger = log4js.getLogger('api');
const logger = log4js.getLogger();

module.exports = {
    sqlLogger,
    apiLogger,
    logger
}