//扑克的构造函数

function Poker(color, number) {
    this.color = color;
    this.number = number;
}

// ♣、♥、♦、♠
Poker.prototype.toString = function() {
    let str = "";
    switch (this.color) {
        case 1:
            str = "♣";
            break;
        case 2:
            str = "♥";
            break;
        case 3:
            str = "♦";
            break;
        case 4:
            str = "♠"
            break;
    }

    switch (this.number) {
        case 1:
            str += "A";
            break;
        case 11:
            str += "J";
            break;
        case 12:
            str += "Q";
            break;
        case 13:
            str += "K";
            break;
        case 14:
            str = "joker";
            break;
        case 15:
            str = "JOKER";
            break;
        default:
            str += this.number;
    }
    return str;
}

module.exports = Poker;