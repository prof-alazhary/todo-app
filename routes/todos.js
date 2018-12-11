const express = require('express');
const router = express.Router();

const TodoService = require('../services/TodoService');

router.get('/', function (req, res, next) {
    // TodoService.create({user:12234,task:"any task...."})
    // .then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)        
    // });
    TodoService.update(null,{id:'5c0c12a7ae1c2c6ecef3f65a',done:true})
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)        
    });
    res.render('todos/index');
});


module.exports = router;
