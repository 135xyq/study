// 将时间戳转为 yyyy - mm - dd
export default function(duration, isDetails = false) {
    const d = new Date(+duration);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : (d.getDate());
    let str = `${year}-${month}-${day}`;
    if (isDetails) {
        const hour = d.getHours().toString().padStart(2, "0");
        const minutes = d.getMinutes().toString().padStart(2, "0");
        const seconds = d.getSeconds().toString().padStart(2, "0");
        str += ` ${hour}:${minutes}:${seconds}`;
    }
    return str;
}