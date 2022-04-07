//传入一个时间戳格式化时间 2021-08-01 
export default function(timestamp) {
    const date = new Date(+timestamp);
    let year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return `${year}-${month}-${day}`
}