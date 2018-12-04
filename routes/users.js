var express = require('express');
var router = express.Router();

const UserService = require('../services/UserService');

/* GET users listing. */
router.get('/', function (req, res, next) {

  UserService.select().then(users => {
    res.render('users-list', {
      users
    });
  })
  //res.send('respond with a resource');
});

module.exports = router;