var express = require('express');
var router = express.Router();

const UserService = require('../services/UserService');

/* GET users listing. */
router.get('/', function (req, res, next) {

  UserService.select().then(users => {
    res.render('users/users-list', { users });
  })
  //res.send('respond with a resource');
});

router.get('/new', function(req, res, next){
  res.render('users/new')
})

router.post('/new', function(req, res, next){
  const user = req.body;
  UserService.create(user).then(ress=>{
   res.redirect('/users')
  }).catch(error=>{
    res.render('error', { error } );
  })
})
module.exports = router;