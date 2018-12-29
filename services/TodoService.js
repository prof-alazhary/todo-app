const Todo = require('../models/Todo'),
    { ObjectId } = require('../config/mongoose').Types;

module.exports = {

    create(_todo) {

        _todo = _todo || {};
        if (!_todo.user) 
            return Promise.reject(new Error('todo should be relates to some user!'));
        
        const todo = new Todo(_todo);

        return Todo.create(todo);
    },
    update(userId, todo, allDone) {

        if (allDone) {
            return Todo.update({ user: userId }, {
                $set: {
                    done: true
                }
            });
        } else {
            return Todo.updateOne({_id:ObjectId(todo.id)},{
                $set: {
                    done: true
                }
            });
        }
    },
    select(userId) {

        return Todo.find({ user: userId });
    }
}