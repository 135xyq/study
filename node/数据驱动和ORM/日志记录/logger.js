// 日志配置

const log4js = require('log4js');
const path = require('path');

// 配置
log4js.configure({
    // 出口
    appenders: {
        sql: {
            type: 'dateFile', //file普通文件，dateFile日期文件在备份时会在文件名中加入日期
            filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log'), //写入文件地址
            maxLogSize: 2 ** 20, // 一个文件写入的最大字节数，超过之后会自动备份到其他文件
            keepFileExt: true, //保留备份文件的后缀名
            // daysToKeep: 0, // 文件会保留多少天，默认为0，一直保留
            // 写入的格式
            layout: {
                type: 'pattern', //pattern是自定义样式
                pattern: '%c: %d{yyyy-MM-dd hh:mm:ss} %p  %m%n' //写入文件的格式

            }
        },
        default: {
            type: 'stdout', //标准控制台输出
        }
    },
    // 分类
    categories: {
        sql: {
            appenders: ["sql"], //该出口使用出口sql的配置
            level: 'all', //级别配置
        },
        default: {
            appenders: ["default"], //该出口使用出口default的配置
            level: 'all', //级别配置
        }
    }
})

//程序要退出时运行shutdown记录完日志
process.on('exit', () => {
    log4js.shutdown();
})

const sqlLogger = log4js.getLogger('sql');
const logger = log4js.getLogger();

module.exports = {
    sqlLogger,
    logger
}