const UserService = require('../services/UserService'),
    TodoService = require('../services/TodoService');

module.exports = {
    selectAllUsers(req, res){
        UserService.select()
        .then(users => res.render('users/index', { users }))
        .catch(error=> res.render('error', { error }));
    },
    new(req, res){
        res.render('users/new')
    },
    create(req, res){
        const user = req.body;
        UserService.create(user)
        .then(ress=>res.redirect('/users'))
        .catch(error=> res.render('error', { error }));
    },
    selectTodos(req, res){
        const userId = req.params.id;

        TodoService.select(userId)
        .then(todos=>res.render('todos/index',{todos, userId}))
        .catch(error=> res.render('error', { error }));
    }
}