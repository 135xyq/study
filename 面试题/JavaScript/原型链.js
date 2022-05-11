function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('xyq', 21);
console.log(person)
    // console.log(Person.prototype === person.__proto__)
    // console.log(Person.__proto__ === Number.__proto__)



// console.log(person.__proto__.__proto__.__proto__)

// console.log(Person.__proto__.__proto__)

const obj = {
    name: 'xyq',
    age: 21
}

Person.sex = '男'

console.log(Person.sex, person.sex, Person.name)

console.log(obj)
console.log(obj.__proto__)


function a() {
    console.log(1);
    return function b() {

    }
}

console.log(new a())

// console.log(Object.prototype)
console.log(a.__proto__)

console.log('----------------------------');

const test = {
    a: 1,
    b: 2
}
test.__proto__.c = 3

console.log(test)

console.log(test.hasOwnProperty('a'))

for (const key in test) {
    console.log(key)
}