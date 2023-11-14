// 格式化时间为 yyyy-mm-dd hh:MM:ss.0

module.exports = function() {
    const date = new Date();
    const year = toTwoSite(date.getFullYear());
    const month = toTwoSite(date.getMonth() + 1);
    const day = toTwoSite(date.getDate());
    const hour = toTwoSite(date.getHours());
    const minutes = toTwoSite(date.getMinutes());
    const seconds = toTwoSite(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.0`;

}

// 将数字转为两位数
function toTwoSite(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}