const e = require('cors');
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
  //id로 userid(기본키)가져오는 쿼리문
  connection.query(`SELECT userid FROM accountbook.user_money WHERE userid =(
    SELECT userid 
      FROM accountbook.user_data 
      WHERE userid IN(
      SELECT userid
      FROM accountbook.user_data
          WHERE id = ${username}))`),
  function(error, result, fields) {
    if(error) {
      console.log('data select error');
    } else {

    }
  }
  connection.query(`SELECT money FROM user_money WHERE user_id = `),
  function(error, result, fields) {
    if(error) {
      console.log('data select error about money');
    } else {
      
    }
  }
});

router.post('/', function (req, res, next) {
    console.log('post success');
  });

module.exports = router;