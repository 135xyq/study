// 此模块判断玩家是否可以移动，以及移动的处理方案
import * as map from "./map.js";
/**
 * 得到玩家的位置
 */
function getPlayerIfo() {
    for (var row = 0; row < map.rowNumber; row++) {
        for (var col = 0; col < map.colNumber; col++) {
            if (map.content[row][col] === map.PLAYER) {
                return {
                    row: row,
                    col: col
                }
            }
        }
    }
    throw new Error("地图上居然没有玩家");
}

/**
 * 得到下一个位置的信息
 * @param {行} row 
 * @param {列} col 
 * @param {方向} direction 
 */
function getNextIfo(row, col, direction) {
    switch (direction) {
        case "left":
            return {
                row: row,
                col: col - 1,
                value: map.content[row][col - 1]
            };
        case "right":
            return {
                row: row,
                col: col + 1,
                value: map.content[row][col + 1]
            };
        case "up":
            return {
                row: row - 1,
                col: col,
                value: map.content[row - 1][col]
            };
        case "down":
            return {
                row: row + 1,
                col: col,
                value: map.content[row + 1][col]
            };
    }
}

/**
 * 将玩家当前位置与下一个位置交换位置
 * @param {玩家当前位置} playerIfo 
 * @param {下一个位置} nextIfo 
 */
function exChangePointer(playerIfo, nextIfo) {
    let temp = map.content[playerIfo.row][playerIfo.col];
    map.content[playerIfo.row][playerIfo.col] = map.content[nextIfo.row][nextIfo.col];
    map.content[nextIfo.row][nextIfo.col] = temp;
}


/**
 *玩家根据方向来移动
 * @param {*} direction 
 */
export function playerMove(direction) {
    // 先得到玩家的信息
    let playerIfo = getPlayerIfo();
    // 根据玩家当前位置得到下一个位置的信息
    let nextIfo = getNextIfo(playerIfo.row, playerIfo.col, direction);
    // 判断下一个位置能否移动
    if (nextIfo.value === map.WALL) {
        // 是墙不能移动
        return false;
    } else if (nextIfo.value === map.SPACE) {
        // 下个位置时空白能移动
        exChangePointer(playerIfo, nextIfo);
        return true;
    } else if (nextIfo.value === map.BOX) {
        // 下个位置时箱子
        // 判断箱子的下一个位置能否移动
        let nextNextIfo = getNextIfo(nextIfo.row, nextIfo.col, direction);
        if (nextNextIfo.value === map.SPACE) {
            exChangePointer(nextIfo, nextNextIfo);
            exChangePointer(playerIfo, nextIfo);
            return true;
        } else {
            return false;
        }
    }
}

/**
 * 根据当前地图判断玩家是否完成了
 */
export function isWin() {
    for (const item of map.correct) {
        if (map.content[item.row][item.col] !== map.BOX) {
            return false;
        }
    }
    return true;
}