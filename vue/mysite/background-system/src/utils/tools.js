// 工具函数库

/**
 * 将时间戳转为日期
 * @param {*} timestamp 时间戳
 */
export function formatDate(timestamp) {
    const date = new Date(parseInt(timestamp));
    let year = date.getFullYear(); //年
    let month = date.getMonth() + 1; //月
    let day = date.getDate(); //日

    let hour = date.getHours(); //时
    let minutes = date.getMinutes(); //分
    let seconds = date.getSeconds(); //秒

    let weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    let week = weekArr[date.getDay()]; //获取星期几

    // 一位数前补0
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds + ' ' + week;
}
