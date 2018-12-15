const express = require('express');
const router = express.Router();

const UserService = require('../services/UserService'),
     TodoService = require('../services/TodoService');

/* GET users listing. */
router.get('/', function (req, res, next) {

  UserService.select()
  .then(users => res.render('users/index', { users }))
  .catch(error=> res.render('error', { error }));
});

router.get('/new', function(req, res, next){
  res.render('users/new')
})

router.post('/new', function(req, res, next){
  const user = req.body;
  UserService.create(user)
  .then(ress=>res.redirect('/users'))
  .catch(error=> res.render('error', { error }));
})

router.get('/:id/todos', function (req, res, next) {
  const userId = req.params.id;

  TodoService.select(userId)
  .then(todos=>res.render('todos/index',{todos, userId}))
  .catch(error=> res.render('error', { error }));
});

module.exports = router;