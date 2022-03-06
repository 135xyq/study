// 同步连接

/*
const mysql = require('mysql2');

//创建一个数据库连接

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'xyq2386152296',
    database: 'my_mysql_test'
})

//简单使用

connection.query(
    'select * from company',
    (error, result) => {
        console.log('error: ', error);
        console.log('result: ', result)
    }
)

connection.end();

*/

// 异步操作

// const mysql = require('mysql2/promise');


// mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'xyq2386152296',
//     database: 'my_mysql_test'
// }).then(resp => {
//     resp.query('select * from company').then(resp => {
//         console.log(resp[0])
//     });
//     resp.end();
// })



// 使用execute防止SQL注入

// function test(id) {
//     const mysql = require('mysql2');

//     //创建一个数据库连接
//     const connection = mysql.createConnection({
//         host: '127.0.0.1',
//         user: 'root',
//         password: 'xyq2386152296',
//         database: 'my_mysql_test'
//     })

//     const sql = `select * from company where id = ?`
//     connection.execute(sql, [id], (error, result) => {
//         console.log(result);
//     })

//     connection.end();
// }

// test(4625);



// 使用createPool连接池
const mysql = require('mysql2');

//创建一个数据库连接
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'xyq2386152296',
    database: 'my_mysql_test'
})


function test(id) {
    const sql = `select * from company where id = ?`
    pool.execute(sql, [id], (error, result) => {
        console.log(result);
    })
}

test(1)