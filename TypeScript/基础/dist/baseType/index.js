let str = 'hello world';
let num = 12;
let bool = false;
let any = [false];
function hello(str) {
    console.log('hello', str);
}
hello('word');
function printCord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCord({ x: 3, y: 7 });
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");
printId(false);
function testPoint(pt) {
    console.log(pt.x, pt.y);
}
testPoint({ x: '111', y: 11 });
function testInterfacePoint(pt) {
    console.log(pt.x, pt.y);
}
testInterfacePoint({ x: 1, y: 2 });
function testInterfaceExtendPoint(pt) {
    console.log(pt.x, pt.y, pt.z);
}
testInterfaceExtendPoint({ x: 1, y: 2, z: '3' });
let arrNUmber1 = [1, 23];
let arrNUmber2 = [[1], []];
let nickName = undefined;
let user;
user = {
    name: 'xyq',
    age: 22
};
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}
const result1 = combine(1, 2);
const result2 = combine('1', '2');
