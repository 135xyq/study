// 入口程序
// const poker = require('./poker');
// console.log((new poker(1, 1).toString()))

const poker = require('./poker');
const until = require('./until');
let pokers = [];
for (let i = 1; i < 14; i++) {
    for (j = 1; j < 5; j++) {
        pokers.push(new poker(j, i));
    }
}
pokers.push(new poker(null, 14), new poker(null, 15));
until.sortRandom(pokers);

let player1 = pokers.slice(0, 17);
// console.log(player1)
let player2 = pokers.slice(17, 34);
let player3 = pokers.slice(34, 51);
let desk = pokers.slice(51);

const players = [
    'player1',
    'player2',
    'player3'
]

const land = until.sortLand(players);


console.log("地主是：", land);
console.log("底牌：");
until.print(desk);
eval(land).push(...desk);

console.log("玩家一：");
until.print(until.sortIndex(player1));

console.log("玩家二：");
until.print(until.sortIndex(player2));

console.log("玩家三：");
until.print(until.sortIndex(player3));