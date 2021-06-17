var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
require('dotenv').config();

// query requests ***


// Action: get lightsaber hilt(s)

router.get('/hilt/:id', function(req,res,next) {
  console.log('hilt')
});

// Action: get Kyber Crystal(s); color(s)

router.get('/crystal/:id', function(req,res,next) {
  console.log('crystal')
});

// const query = `SELECT * from `;

// db.all(query, (err, row) => {
//   if (err) throw err;
//   console.log(row);
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'jar-jar' });
});


// Get About page ***

router.get('/about', function(req,res,next) {
  res.render('about',{title:'about page'});
});

// Get Contact page ***

router.get('/contact', function(req,res,next) {
  res.render('contact',{title:'contact page'});
});

module.exports = router;
