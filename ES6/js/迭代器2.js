const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10, 11];

function iterator(arr) {
    let i = 0;
    return {
        next() {
            return {
                value: arr[i++],
                done: i >= arr.length
            }
        }
    }
}

console.log(iterator(arr2).next());
console.log(iterator(arr1).next());