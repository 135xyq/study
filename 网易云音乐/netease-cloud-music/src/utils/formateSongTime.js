/**
 * 传入一个时间，转为分：秒
 * @param {*} time 毫秒
 * @returns 
 */
export function formateSongsTime(time) {
    time = parseInt(time);
    let minutes = Math.floor((Math.floor(time / 1000)) / 60); //分钟
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let seconds = Math.floor((Math.floor(time / 1000)) % 60); //秒
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
}

/**
 * 格式化时间 xxxx年xx月xx日
 * @param {*} time 
 */
export function formateDate(timestamp) {
    const date = new Date(+timestamp);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${year}年${month}月${day}日`
}

/**
 * 将03:06.644  转为毫秒数
 * @param {*} str 
 */
export function changeToTimeStamp(str) {
    if (str) {
        const minutes = str.split(':')[0]; //分
        const seconds = str.split(':')[1].split('.')[0]; //秒
        const ms = str.split(':')[1].split('.')[1]; //毫秒
        let time = 0;
        time = +minutes * 60000 + (+seconds) * 1000 + (+ms);
        return time;
    } else {
        return ''
    }

}


changeToTimeStamp('03:06.644')