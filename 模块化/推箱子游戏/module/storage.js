// 本地存储最好的成绩
import { level } from './ui.js';
import { count } from './game.js'
let obj = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
}
export default function() {
    localStorage.setItem('levels', JSON.stringify(obj));
    let str = level;
    const levels = JSON.parse(localStorage.getItem('levels'));
    if (Number(obj[level + 1]) === 0) {
        obj[level + 1] = count;
    }
    if (count < Number(obj[level + 1]) && obj[level + 1] !== 0) {
        obj[level + 1] = count;
    }

}

/**
 * 根据当前关卡获得最差好成绩
 * @param {*} localLevel 
 */
export function getStorage(localLevel) {
    localStorage.setItem('levels', JSON.stringify(obj));
    return JSON.parse(localStorage.getItem('levels'))[localLevel]
}