// 本地存储最好的成绩
import { level } from './ui.js';
import { count } from './game.js'
let obj = localStorage.getItem('levels') !== 'null' ? JSON.parse(localStorage.getItem('levels')) : {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
}


localStorage.setItem('levels', JSON.stringify(obj));

export default function() {
    let str = level;
    let flag = false;
    // let storage = JSON.parse(localStorage.getItem('levels'));
    if (Number(obj[level + 1]) === 0) {
        obj[level + 1] = count;
    }
    if (count < Number(obj[level + 1]) && obj[level + 1] !== 0) {
        obj[level + 1] = count;
        // 表示打破了记录
        flag = true;
    }
    localStorage.setItem('levels', JSON.stringify(obj));
    return flag;
}

/**
 * 根据当前关卡获得最差好成绩
 * @param {*} localLevel 
 */
export function getStorage(localLevel) {
    return JSON.parse(localStorage.getItem('levels'))[localLevel]
}