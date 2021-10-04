// 此模块将页面展示
import * as map from './map.js';

// 每个小块的宽高
const pieceWidth = 45;
const pieceHeight = 45;

const divContent = document.getElementById("game");

/**
 * 设置容器的宽高
 */
function setDivContent() {
    divContent.style.width = `${pieceWidth * map.colNumber}px`;
    divContent.style.width = `${pieceHeight * map.rowNumber}px`;
}

/**
 *根据行和列判断是否是在正确的位置
 * @param {*} row 
 * @param {*} col 
 */

function wetherRightSpace(row, col) {
    for (const item of map.correct) {
        if (item.col === col && item.row === row) {
            return true;
        }
    }
    return false;
}

/**
 * 根据行和列设置元素
 * @param {*} row 
 * @param {*} col 
 */
function setPiece(row, col) {
    const div = document.createElement('div');
    div.className = 'item';
    let value = map.content[row][col];
    // 设置每个div的位置
    div.style.left = `${col * pieceWidth}px`;
    div.style.top = `${row * pieceHeight}px`;
    if (value === map.WALL) {
        div.classList.add('wall');
    } else if (value === map.PLAYER) {
        div.classList.add('player');
    } else if (value === map.BOX) {
        if (wetherRightSpace(row, col)) {
            div.classList.add('correct-box');
        } else {
            div.classList.add('box');
        }
    } else {
        // 空白
        if (wetherRightSpace(row, col)) {
            div.classList.add('correct');
        } else {
            return;
        }
    }
    divContent.appendChild(div);
}

/**
 * 设置每一个元素
 */
function setPieces() {
    // 清空页面
    divContent.innerHTML = "";
    // 渲染每一个元素
    for (let row = 0; row < map.rowNumber; row++) {
        for (let col = 0; col < map.colNumber; col++) {
            setPiece(row, col);
        }
    }
}
/**
 * 将容器展示
 */
export function setContent() {
    // 设置外部容器的宽高
    setDivContent();
    // 设置里面的每一个元素
    setPieces();
}