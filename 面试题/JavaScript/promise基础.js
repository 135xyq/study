const pro = new Promise((resolve, reject) => {
    // resolve(345)
    // console.log(1213)
    // reject(234)
    throw new Error('test')
}).then(data => {
    console.log(data)
}).catch(data => {
    console.log(data)
}).finally(data => {
    console.log(1, data)
})

console.log(pro)

setTimeout(() => {
    console.log(2, pro)
}, 100)



// function test1(){
//     return new Promise((resolve, reject)=>{
//         console.log(1);
//         resolve(2);
//     })
// }

// function test2(){
//     return new Promise((resolve, reject)=>{
//         test1().then(data => {
//             const result = data;
//             console.log(result);
//             resolve();
//         })
//     })
// }

// test2();