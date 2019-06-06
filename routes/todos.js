const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/TodoController');

router.post('/new', TodoController.create);

router.put('/:id', TodoController.update);

router.delete('/:id', TodoController.delete);

module.exports = router;
