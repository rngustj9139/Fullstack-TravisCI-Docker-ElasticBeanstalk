const mysql = require('mysql');

const pool = mysql.createPool({ // mysql 풀 생성
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'johnahn',
    database: 'myapp'
})

exports.pool = pool;