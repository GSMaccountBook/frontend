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
    console.log('post success');
  });

module.exports = router;