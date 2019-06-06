const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.selectAllUsers);

router.get('/new', UserController.new)

router.post('/new', UserController.create)

router.get('/:id/todos', UserController.selectTodos);

module.exports = router;