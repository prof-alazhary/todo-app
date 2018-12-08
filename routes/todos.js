const express = require('express');
const router = express.Router();

const UserService = require('../services/UserService');

router.get('/', function (req, res, next) {
    res.render('todos/index');
});


module.exports = router;
