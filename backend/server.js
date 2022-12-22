const express = require('express');
const bodyParser = require('body-parser'); // bodyParser는 클라이언트에서 오는 요청의 본문을 해석해주는 역할을 하는 라이브러리이다.

const db = require('./db'); // db.js의 pool 이용

const app = express();

app.use(bodyParser.json()); // json 형태로 오는 요청의 본문을 해석해줄수있게 body-parser를 등록

// 사용할 테이블 생성하기
db.pool.query(`CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)`, (err, results, fields) => {
    console.log('results', results);
})

// DB lists 테이블에 있는 모든 데이터를 프론트에 보내주는 api
app.get('/api/values', function (req, res) {
    db.pool.query('SELECT * FROM lists', 
    (err, results, fields) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.json(results);
        }
    })
})

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post('/api/value', function (req, res, next) {
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`, // body-parser를 이용하기 때문에 클라이언트에서 오는 요청의 본문(req.body.value)을 쉽게 해석 가능
    (err, results, fields) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.json({ success: true, value: req.body.value });
        }
    })
})

app.listen(5000, () => {
    console.log("애플리케이션이 5000번 포트에서 시작되었습니다.");
})