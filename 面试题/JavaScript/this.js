// var name = 'xyq';

// function test() {
//     console.log(this)
//     return this.name;
// }

// console.log(test())




const o1 = {
    text: 'o1',
    fn: function() {
        console.log(this)
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: function() {
        return o1.fn();
    }
}

const o3 = {
    text: 'o3',
    fn: function() {
        var fn = o1.fn;
        console.log(fn)
        return fn();
    }
}

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined