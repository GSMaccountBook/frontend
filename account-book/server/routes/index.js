var express = require('express');
var router = express.Router();
var cors = require('cors');

//email인증할 때 사용
const nodemailer = require('nodemailer');

require('dotenv').config();

//const bodyParser = require("body-parser");



//DB연동용
const mysql = require("mysql");

var connection = mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER ,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

connection.connect();

router.get('/', function (req, res, next) {
  console.log('get success');
  /*
  let username = req.body.username;
  let passwd = req.body.passwd;
  connection.query("INSERT INTO test(id, test1, test2) VALUES ('idval','"+username+"','"+passwd+"')",
	function(error, result, fields) {
		if(error) {
			console.log(error);
		} else {
			console.log('insert success');
		}
	});
  */
  let hello = 'hi';
  res.json({hello:hello});
});

//console.log(process.env.NODEMAILER_USER);

router.post('/mail', async(req, res) => {
  //이메일 인증 부분, 회원가입에 넣을 예정

  let authNum = Math.random().toString().substr(2,6);


  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from:process.env.NODEMAILER_USER,
    to:req.body.email,
    subject:"가계부 E-Mail인증번호",
    text:`인증번호는 ${authNum} 입니다`
  };

  await smtpTransport.sendMail(mailOptions, (error, response)=> {
    if(error) {
      console.log('send error');
      console.log(error);
    } else {
      console.log('send success');
    }
    smtpTransport.close(); 
  })
});




module.exports = router;