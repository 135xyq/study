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

let arrNUmber1: number[] = [1, 23]

let arrNUmber2: Array<number[]> = [[1], []]

let nickName: string | undefined = undefined

let user: {
  name: string,
  age: number
}

user = {
  name: 'xyq',
  age: 22
}

function combine(a: number, b: number): number
function combine(a: string, b: string): string
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
}

const result1 = combine(1, 2)
const result2 = combine('1', '2')
