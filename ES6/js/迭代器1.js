const arr = [1, 2, 3, 4, 5];
const iterator = {
    i: 0,
    next() {
        return {
            value: arr[this.i++],
            done: this.i >= arr.length + 1
        }
    }
}

let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}