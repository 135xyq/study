let str: string = 'hello world';

let num: number = 12;

let bool: boolean = false;

let any: any = [false]

function hello(str: string) {
  console.log('hello', str)
}

hello('word')

function printCord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCord({x: 3, y: 7});

function printId(id: number | string | boolean) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("202");
printId(false)

type Point = {
  x: number | string,
  y: number
}

function testPoint(pt: Point) {
  console.log(pt.x, pt.y);
}

testPoint({x: '111', y: 11})

interface interfaceTestPoint {
  x: number | string,
  y: number | string
}

function testInterfacePoint(pt: Point) {
  console.log(pt.x, pt.y);
}

testInterfacePoint({x: 1, y: 2})

interface testExtend extends interfaceTestPoint {
  z: number | string
}

function testInterfaceExtendPoint(pt: testExtend) {
  console.log(pt.x, pt.y, pt.z);
}

testInterfaceExtendPoint({x: 1, y: 2, z: '3'})

