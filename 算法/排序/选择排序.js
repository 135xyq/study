const arr = [2, 4, 1, 8, 5, 6, 3, 9];

/**
 * 传入两个参数，比较是否需要交换，flag为1表示升序，flag = 0表示降序
 * @param {number} a 
 * @param {number} b 
 * @param {number} flag 1 }| 0
 */
function compare(a, b, flag = 1) {
    if (flag) {
        return a - b > 0;
    } else {
        return a - b < 0;
    }
}

/**
 * 交换数组链各个位置的数
 * @param {array} arr 
 * @param {number} a 
 * @param {number} b 
 */
function exchange(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

/**
 * 选择排序
 * @param {array} arr 
 */
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[i], arr[j], 0)) {
                exchange(arr, i, j);
                console.log(arr)
            }
        }
    }
}

sort(arr);
console.log(arr)