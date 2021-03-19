var express = require('express');
var app = express();
const port = 3002;
//cors필요하면 넣기
//const bodyParser = require("body-parser");

let dotenv = require('dotenv')

dotenv.config({
    path: './accountbook/.env'
  });

//app.use(bodyParser.urlencoded({extended: false}));

var indexRouter = require('./routes/index');
//var userRouter = require('./routes/user');

app.use(indexRouter);

// portnumber를 3002로 지정


// 3002번 포트넘버를 가진 서버 생성
app.listen(port, () => console.log(`listening on port ${port}!`));