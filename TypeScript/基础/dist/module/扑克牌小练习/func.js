"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPoker = exports.createPokers = void 0;
const enum_1 = require("./enum");
function createPokers() {
    let pokerList = [];
    const colors = Object.values(enum_1.suit2);
    let pointList = Object.values(enum_1.point2);
    for (let i = 0; i < pointList.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            pokerList.push({
                playingCardSuit: colors[j],
                point: pointList[i]
            });
        }
    }
    return pokerList;
}
exports.createPokers = createPokers;
function printPoker(poker) {
    let result = "\n";
    for (let i = 0; i < poker.length; i++) {
        result += poker[i].playingCardSuit + poker[i].point + '\t';
        if ((i + 1) % 8 === 0) {
            result += '\n';
        }
    }
    console.log(result);
}
exports.printPoker = printPoker;
