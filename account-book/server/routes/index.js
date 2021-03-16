var express = require('express');
var router = express.Router();

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
  connection.query("INSERT INTO test VALUES ('idval,test1val,test2val')",
	function(error, result, fields) {
		if(error) {
			console.log('insert fail');
		} else {
			console.log('insert success');
		}
	});
})

module.exports = router;