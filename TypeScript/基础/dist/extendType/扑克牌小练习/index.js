var suit1;
(function (suit1) {
    suit1["heart"] = "\u7EA2\u6843";
    suit1["spade"] = "\u9ED1\u6843";
    suit1["club"] = "\u6885\u82B1";
    suit1["diamond"] = "\u65B9\u5757";
})(suit1 || (suit1 = {}));
var point;
(function (point) {
    point["one"] = "A";
    point["two"] = "2";
    point["three"] = "3";
    point["four"] = "4";
    point["five"] = "5";
    point["six"] = "6";
    point["seven"] = "7";
    point["eight"] = "8";
    point["nine"] = "9";
    point["ten"] = "10";
    point["eleven"] = "J";
    point["twelve"] = "Q";
    point["thirteen"] = "K";
})(point || (point = {}));
function createPokers() {
    let pokerList = [];
    const colors = Object.values(suit1);
    let pointList = Object.values(point);
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
function printPoker(poker) {
    let result = "\n";
    for (let i = 1; i <= poker.length; i++) {
        console.log(i, poker[i]);
        result += poker[i].playingCardSuit + poker[i].point + '\t';
        if (i % 8 === 0) {
            result += '\n';
        }
    }
    console.log(result);
}
printPoker(createPokers());
