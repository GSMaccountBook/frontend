var express = require('express');
var app = express();
const port = 3002;

const cors = require('cors');
app.use(cors())
//cors필요하면 넣기
//const bodyParser = require("body-parser");

//require('dotenv').config()

//console.log(process.env.NODEMAILER_USER);

//app.use(bodyParser.urlencoded({extended: false}));

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
//var userRouter = require('./routes/user');

app.use(indexRouter);
app.use(loginRouter);

// portnumber를 3002로 지정


// 3002번 포트넘버를 가진 서버 생성
app.listen(port, () => console.log(`listening on port ${port}!`));