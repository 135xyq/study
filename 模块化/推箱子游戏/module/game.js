// 此模块主要完成事件的监听
import { setContent } from './ui.js';
import { playerMove, isWin, showEnd } from "./play.js";

// showEnd();
setContent();
// 是否完成了游戏
let over = false;
window.onkeydown = (e) => {
    if (over) {
        return;
    }
    let result = false;
    switch (e.key) {
        case "ArrowUp":
            result = playerMove("up");
            break;
        case "ArrowDown":
            result = playerMove("down");
            break;
        case "ArrowLeft":
            result = playerMove("left");
            break;
        case "ArrowRight":
            result = playerMove("right");
            break;
    }

    if (result) {
        setContent();
        if (isWin()) {
            console.log("恭喜你完成了推箱子！")
            over = true;
        }
    }
}