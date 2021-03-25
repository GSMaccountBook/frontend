var express = require('express');
var router = express.Router();

require('dotenv').config();

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
});

router.post('/', function (req, res, next) {
  var name = req.body.name;
	var username = req.body.username;
	var password = req.body.password;
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

module.exports = router;