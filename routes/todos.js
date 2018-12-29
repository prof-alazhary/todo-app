const express = require('express');
const router = express.Router();

const TodoService = require('../services/TodoService');

router.post('/new', function (req, res, next) {

    TodoService.create(req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {        
        res.json(err);
    });
});

router.put('/:id/update', function (req, res, next) {
console.log("put===>")
    TodoService.update(null, { id: req.params.id })
    .then((result) => {
        console.log("result-->",result)
        res.json(result);
    }).catch((err) => {     
        console.log("err-->",err)
        res.json(err);
    });
});

module.exports = router;
