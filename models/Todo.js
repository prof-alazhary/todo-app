const { model } = require('../config/mongoose');

const Todo = model('Todo', {
    user:{
        type: String,
        require: true
    },
    task: {
        type: String,
        default: 'new task'
    },
    done:{
       type: Boolean,
       default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});


Todo.updateOne = Promise.promisify(Todo.updateOne.bind(Todo));
Todo.update = Promise.promisify(Todo.update.bind(Todo));
Todo.find = Promise.promisify(Todo.find.bind(Todo));
Todo.create = Promise.promisify(Todo.create.bind(Todo));


module.exports = Todo;