const express = require('express');
const router = express.Router();

const TodoService = require('../services/TodoService');

router.post('/new', function (req, res, next) {

    TodoService.create(req.body)
    .then((result) => {
        console.log(result)
        res.json(result);
    }).catch((err) => {
        console.log(err)        
        res.json(err);
    });
});


module.exports = router;
