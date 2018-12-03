var express = require('express');
var router = express.Router();

var hello = require('../config/connection');



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(hello);
  res.render('index', { title: 'ToDo App' });
});

module.exports = router;
