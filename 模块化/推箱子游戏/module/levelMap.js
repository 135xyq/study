// 每个关卡的地图
import * as map from "./map.js";

/**
 * 关卡2地图
 * @param {*} level 
 */
export function mapLevel2(level) {
    map.content[1][4] = 1;
    map.content[2][4] = 3;
    map.content[3][4] = 0;
    map.content[4][5] = 3;
    map.content[5][5] = 0;
    map.content[7][5] = 3;
    map.content[7][6] = 2;
    map.content[8][4] = 0;
    map.content[9][3] = 3;
    map.content[10][4] = 0;
}
/**
 * 关卡3地图
 * @param {*} level 
 */
export function mapLevel3(level) {
    map.content[1][4] = 1;
    map.content[4][3] = 3;
    map.content[4][4] = 0;
    map.content[4][5] = 3;
    map.content[5][3] = 0;
    map.content[5][5] = 0;
    map.content[6][2] = 3;
    map.content[7][6] = 0;
    map.content[7][4] = 0;
    map.content[7][5] = 3;
}
/**
 * 关卡4地图
 * @param {*} level 
 */
export function mapLevel4(level) {
    map.content[1][4] = 1;
    map.content[2][4] = 3;
    map.content[3][4] = 0;
    map.content[3][5] = 3;
    map.content[4][4] = 0;
    map.content[4][5] = 3;
    map.content[5][2] = 0;
    map.content[5][4] = 0;
    map.content[6][2] = 3;
    map.content[6][3] = 3;
    map.content[6][4] = 0;
    map.content[7][6] = 2;
    map.content[8][4] = 0;
    map.content[8][5] = 3;
    map.content[9][3] = 3;
    map.content[9][4] = 0;
}