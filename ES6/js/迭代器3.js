function createFeiBoIterator() {
    let previous1 = 1,
        previous2 = 1,
        n = 1;
    return {
        next() {
            let value = null;
            if (n <= 2) {
                value = 1;
            } else {
                value = previous1 + previous2;
            }
            const result = {
                value,
                done: false,
            }
            previous2 = previous1;
            previous1 = value;
            n++;
            return result;
        }
    }
}

const iterator = createFeiBoIterator();
let N = 10;
while (N--) {
    console.log(iterator.next().value);
}