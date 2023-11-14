// const arr = [];
// arr[3.4] = "Oranges";
// console.log(arr.length); // 0
// console.log(Object.hasOwn(arr, 3.4)); // true
// console.log(arr['3.4']);


// const arr = [1,2,3]

// arr[31] = 31
// console.log(arr, arr.length);

// arr.length = 0

// console.log(arr);

// let myArray = ["a", "b", "c", "d", "e"];
// myArray1 = myArray.slice(1, 4); // [ "b", "c", "d"]
// console.log(myArray,myArray1);

// const arr = [1,3,2,6,5,7]

// arr.sort((a,b) => a-b)

// console.log(arr);

// const arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]]]

// console.log(arr.flat(8));

const arr = [1,2,3,4]

const total = arr.reduce((preTotal,current) => preTotal + current , 0)

console.log(total);