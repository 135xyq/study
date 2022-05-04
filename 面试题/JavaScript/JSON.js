const a = {
    name: '1',
    age: 2
}

const b = JSON.stringify(a);
const c = JSON.parse(b)
console.log(c)

console.log([1, 2, 3].toString())