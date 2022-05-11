let str = 'helloWord'



console.log(str.padStart(20, ' '))

console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log(str.includes('f'), str.includes('e'))


const reg = /[abc][0-9]/

const str1 = 'a2'
console.log(str1.match(reg))

let text = "cat, bat, sat, fat";
let pattern = /.at/g;
let matches = text.match(pattern);
console.log(matches); // "cat"