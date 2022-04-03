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