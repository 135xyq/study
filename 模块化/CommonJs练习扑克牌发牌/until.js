// 完成数组的打乱和玩家手牌的输出

module.exports = {
    /**
     * 将数组乱序
     * @param {*} arr 
     */
    sortRandom(arr) {
        arr.sort((a, b) => Math.random() - 0.5)
    },
    /**
     * 将数组从小到大排序
     * @param {*} arr 
     * @returns 
     */
    sortIndex(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (Number(arr[i].number) > Number(arr[j].number)) {
                    let temp = arr[i].number;
                    arr[i].number = arr[j].number;
                    arr[j].number = temp
                    let temp1 = arr[i].color;
                    arr[i].color = arr[j].color;
                    arr[j].color = temp1
                }
            }
        }
        return arr;
    },

    /**
     * 打印玩家的手牌
     * @param {*} player 
     */
    print(player) {
        let str = "";
        for (const iterator of player) {
            str += `${iterator.toString()}  `;
        }
        console.log(str);
    },
    /**
     * 随机生成地主
     * @param {玩家数组} arr 
     * @returns 地主
     */
    sortLand(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
}