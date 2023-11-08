function createOnePoker(poker) {
    return poker;
}
function createPokers() {
    let pokerList = [];
    const suitList = ['梅花', '方块', '红桃', '黑桃'];
    for (let i = 1; i <= 13; i++) {
        for (let j = 0; j < suitList.length; j++) {
            pokerList.push({
                playingCardSuit: suitList[j],
                point: i
            });
        }
    }
    return pokerList;
}
let result = createOnePokers();
console.log(result);
