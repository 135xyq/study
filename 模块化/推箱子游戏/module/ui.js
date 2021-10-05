// 此模块将页面展示
import * as map from './map.js';
import { nextLevel, count, overGame } from './game.js'
import { getStorage } from './storage.js';

// 每个小块的宽高
const pieceWidth = 45;
const pieceHeight = 45;

const divContent = document.getElementById("game");

let level = 0;
/**
 * 设置容器的宽高
 */
function setDivContent() {
    divContent.style.width = `${pieceWidth * map.colNumber}px`;
    divContent.style.height = `${pieceHeight * map.rowNumber}px`;
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

export function showEnd() {
    const div = document.createElement("div");
    div.className = "end";
    div.id = "end";
    div.innerText = "恭喜你！完成了推箱子！"
    document.body.appendChild(div);
    div.innerHTML += `
    <div class="btnWrapper" id="total">
        <p>第${level +1}关共走步数：${count}</p>
        <button id="next">下一关</button>
        <button id="endGame">结束</button>
    </div>
    `
    next.addEventListener('click', e => {
        nextLevel(++level);
    })
    endGame.addEventListener('click', e => {
        overGame(++level, div);
    })

}
/**
 * 将容器展示
 */
export function setContent() {
    // 设置外部容器的宽高
    setDivContent();
    // 设置里面的每一个元素
    setPieces();
    // 显示关数
    showLevel();
    // 显示最好成绩
    // showBest();
}

function showLevel() {
    levels.innerHTML = `${level + 1}`;
}

function showBest() {
    let result = getStorage(level + 1);
    best.innerHTML = `<p>本关的最好成绩是${result}步</p>`;
}
export { level };