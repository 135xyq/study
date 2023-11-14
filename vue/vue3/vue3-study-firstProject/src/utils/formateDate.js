// 格式化时间

/**
 * 将时间戳格式化为 年-月-日
 * @param {*} d 时间戳
 */
export default function formateDate() {
    const formate = d => {
        const date = new Date(d);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return `${year}-${month}-${day}  ${hour}:${minute}:${seconds}`
    }
    return {
        formate
    }
}