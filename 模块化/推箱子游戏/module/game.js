// 此模块主要完成事件的监听
import { setContent, showEnd } from './ui.js';
import { playerMove, isWin } from "./play.js";
import * as map from "./map.js";
import a from "./storage.js"
import * as levelMap from "./levelMap.js";

// const next = document.getElementById("next");
// const endGame = document.getElementById("endGame");

setContent();
let count = 0;
// 是否完成了游戏
let over = false;
window.onkeydown = (e) => {
    let result = false;
    switch (e.key) {
        case "ArrowUp":
            result = playerMove("up");
            count++;
            break;
        case "ArrowDown":
            result = playerMove("down");
            count++;
            break;
        case "ArrowLeft":
            result = playerMove("left");
            count++;
            break;
        case "ArrowRight":
            result = playerMove("right");
            count++;
            break;
    }

    if (result) {
        setContent();
        if (isWin()) {
            a();
            showEnd();
        }
    }
}

/**
 * 找到玩家所在位并修改
 */
function changePlayer() {
    let row, col;
    for (let i = 0; i < map.rowNumber; i++) {
        for (let j = 0; j < map.colNumber; j++) {
            if (map.content[i][j] === 1) {
                row = i;
                col = j;
                break;
            }
        }
    }
    map.content[row][col] = 0;
}

export function nextLevel(level) {
    count = 0;
    changePlayer();
    switch (level) {
        case 1:
            levelMap.mapLevel2(level);
            break;
        case 2:
            levelMap.mapLevel3(level);
            break;
        case 3:
            levelMap.mapLevel4(level);
            break;
        case 4:
            passGame()
            break;
    }
    setContent()
    document.body.removeChild(end);
}

function passGame() {
    alert("你已通关！");
    window.location.reload();
}

export function overGame(level, dom) {
    dom.innerHTML = `
    <div class="overGame">
       <p>本次共完成${level}关</p>
       <p id="reload">再玩一次</p>
    </div>`
    reload.addEventListener('click', () => {
        window.location.reload();
    })
}

export { count };