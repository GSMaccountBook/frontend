var express = require('express');
var router = express.Router();

//email인증할 때 사용
const nodemailer = require('nodemailer');


//DB연동용
const mysql = require("mysql");

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

router.post('/mail', async(req, res) => {
  let authNum = Math.random().toString().substr(2,6);
  let emailTemplete;/*
  ejs.renderFile(appDir+'/template/authMail.ejs', {authCode : authNum}, function (err, data) {
    if(err){console.log(err)}
    emailTemplete = data;
  });*/

  let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
      },
  });

  let mailOptions = await transporter.sendMail({
      from: `가계부 프로젝트`, //프로젝트 이름
      to: 'inkyo0112@naver.com',
      subject: '회원가입을 위한 인증번호를 입력해주세요.',
      html: `    <p style='color:black'>회원 가입을 위한 인증번호 입니다.</p>
      <p style='color:black'>아래의 인증 번호를 입력하여 인증을 완료해주세요.</p>
      <h2>${authNum}</h2>`,
  });


  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          console.log(error);
      }
      console.log("Finish sending email : " + info.response);
      res.send(authNum);
      transporter.close()
  });
});




module.exports = router;