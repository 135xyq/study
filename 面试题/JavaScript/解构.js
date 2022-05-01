const a = {
    b: {
        c: {
            d: 1
        }
    }
}

const { b: { c: { d } } } = a
console.log(d)