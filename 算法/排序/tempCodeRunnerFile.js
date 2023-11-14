function quickSort(arr) {
    quickSort2(arr, 0, arr.length);
}

quickSort(arr);
console.log(arr);