const a = {
    b: {
        c: {
            d: 1
        }
    },
    f: 23
}

// const { b: { c: { d } } } = a
// console.log(d)

// const { f: name } = a;
// console.log(name)

const arr = [1, 2, 3, 4, 5, 6];
const [n1, , , n2, n3, n4] = arr;
console.log(n1, n2, n3, n4)