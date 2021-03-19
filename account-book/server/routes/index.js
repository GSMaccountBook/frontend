var express = require('express');
var router = express.Router();

//email인증할 때 사용
const nodemailer = require('nodemailer');


//DB연동용
const mysql = require("mysql");

const dotenv = require('dotenv');
 
dotenv.config();
console.log(process.env.HELLO);

var connection = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user: "root",
    password:"0112",
    database:"accountbook"
});

connection.connect();



router.get('/', function (req, res, next) {
  console.log('get success');
  connection.query("INSERT INTO test(id, test1, test2) VALUES ('idval','test1val','test2val')",
	function(error, result, fields) {
		if(error) {
			console.log(error);
		} else {
			console.log('insert success');
		}
	});
});

console.log(process.env.NODEMAILER_USER);

router.post('/mail', async(req, res) => {
  //이메일 인증

  let authNum = Math.random().toString().substr(2,6);


  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  const mailOptions = {
    subject:"hi",
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