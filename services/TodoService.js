const Todo = require('../models/Todo'),
    { ObjectId } = require('../config/mongoose').Types;

module.exports = {

    create(_todo) {

        _todo = _todo || {};
        if (!_todo.user) return Promise.reject(new Error('todo should be relates to some user!'));
        const todo = new Todo(_todo);
        return Promise.promisify(todo.save.bind(todo))();
    },
    update(userId, todo, allDone) {

        if (allDone) {
            return Promise.promisify(Todo.update.bind(Todo))({ user: userId }, {
                $set: {
                    done: allDone
                }
            });
        } else {
            return Promise.promisify(Todo.updateOne.bind(Todo))({_id:ObjectId(todo.id)},{
                $set: {
                    done: todo.done
                }
            });
        }
    },
    select(userId) {

        return Promise.promisify(Todo.find.bind(Todo))({ user: userId });
    }
}