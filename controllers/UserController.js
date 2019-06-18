const UserService = require('../services/UserService'),
    TodoService = require('../services/TodoService');

module.exports = {
    selectAllUsers(req, res){
        UserService.select()
        .then(users =>{
            if(req.wantsJSON){
                res.json({users});
            }else{
                res.render('users/index', { users })
            }
        } )
        .catch(error=> {
            if(req.wantsJSON){
                res.json({error});
            }else{
                res.render('error', { error })
            }
        });
    },
    new(req, res){
        res.render('users/new')
    },
    create(req, res){
        const user = req.body;
        UserService.create(user)
        .then(ress=>res.redirect('/users'))
        .catch(error=> {
            if(req.wantsJSON){
                res.json({error});
            }else{
                res.render('error', { error })
            }
        });
    },
    selectTodos(req, res){
        const userId = req.params.id;

        TodoService.select(userId)
        .then(todos=>{
            if(req.wantsJSON){
                res.json({todos, userId});
            }else{
                res.render('todos/index',{todos, userId})
            }
        })
        .catch(error=> {
            if(req.wantsJSON){
                res.json({error});
            }else{
                res.render('error', { error })
            }
        });
    }
}