var express = require('express');
var router = express.Router();

require('dotenv').config();

//DB연동용
const mysql = require("mysql");
const { route } = require('./money');

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
});

router.post('/', function (req, res, next) {
	connection.query("INSERT INTO users VALUES ('"+username +"', '"+name+"', '"+password+"')",
	function(error, result, fields) {
		if(error) {
			console.log('insert fail');
		} else {
			//correct web
			console.log('insert success');
		}
	});
	connection.query("INSERT INTO user_money VALUES ('"+username+"', '0', '0', '0')",
	function(error, result, fields) {
		if(error) {
			console.log('user_money table insert error');
		} else {
			console.log('user_money table insert success');
		}
	})

  });

  router.post('/mail', function(req,res,next) {
	console.log('mail get success');
	let name = req.body.name;
	let username = req.body.username;
	let password = req.body.password;
	let email = req.body.email;


	let authNum = Math.random().toString().substr(2,6);
	res.json({authNum:authNum});
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
  });

});

module.exports = router;