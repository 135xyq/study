
const arr = [2, 4, 1, 8, 5, 6, 3, 9];
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quickSort2(arr, begin, end) {
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left++; while (left < right && arr[left] < arr[begin]);
        do right--; while (right > left && arr[right] > arr[begin]);
        if (left < right) swap(arr, left, right)
    } while (left < right);
    var swapPoint = left == right ? right - 1 : right;
    console.log(left,right)
    swap(arr, begin, swapPoint);
    quickSort2(arr, begin, swapPoint);
    quickSort2(arr, swapPoint + 1, end);
}

function quickSort1(arr) {
    quickSort2(arr, 0, arr.length);
}

quickSort1(arr);
console.log(arr);