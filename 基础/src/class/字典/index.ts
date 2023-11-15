import {Dictionary} from "./dict";

const dict = new Dictionary<string, number>()

dict.set('a', 1)
dict.set('b', 2)
dict.set('a', 111)
console.log(dict.size)

dict.delete('a')

console.log(dict.size)

console.log(dict.get('b'))
