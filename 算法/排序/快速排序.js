const arr = [2, 4, 1, 8, 5, 6, 3, 9];
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
 * 快速排序，消耗性能
 * @param {*} arr 
 * @returns 
 */
// function quickSort(arr) {
//     if (arr === null || arr.length === 0) {
//         return [];
//     }
//     const leader = arr[0];
//     let left = [];
//     let right = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < leader) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     left = quickSort(left);
//     right = quickSort(right);
//     left.push(leader);
//     return left.concat(right)

// }


// console.log(quickSort(arr))

/**
 * 快速排序
 * @param {*} arr 数组
 * @param {*} begin 数组开始处理的位置
 * @param {*} end 数组结束处理的位置
 */
function quickSort(arr, begin, end) {
    if (begin >= end - 1) return;
    let left = begin;
    let right = end;
    do {
        // 找出连续的两段数组，左边一段比领导者，右边一段比领导者大，领导者为arr[begin]
        do {
            left++;
        } while (left < right && arr[left] < arr[begin]);
        do {
            right--;
        } while (right > left && arr[right] > arr[begin]);
        if (left < right) {
            exchange(arr, left, right);
        }
    } while (left < right);
    const swapPointer = left == right ? right - 1 : right;
    exchange(arr, begin, swapPointer);
    quickSort(arr, begin, swapPointer);
    quickSort(arr, swapPointer + 1, end);
}


quickSort(arr, 0, arr.length);
console.log(arr);