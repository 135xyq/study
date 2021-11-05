// 将时间戳转为 yyyy - mm - dd
export default function(duration) {
    const d = new Date(+duration);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : (d.getDate());
    return `${year}-${month}-${day}`;
}