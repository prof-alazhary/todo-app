TodoService = require('../services/TodoService');

module.exports = {
    create(req, res){
        TodoService.create(req.body)
        .then((result) => {
            res.json(result);
        }).catch((err) => {        
            res.json(err);
        });
    },
    update(req, res){
        TodoService.update(null, { id: req.params.id })
        .then((result) => {
            res.json(result);
        }).catch((err) => {     
            res.json(err);
        });
    },
    delete(req, res){
        TodoService.delete(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {     
            res.json(err);
        });
    }
}