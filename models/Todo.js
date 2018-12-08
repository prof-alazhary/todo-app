const { model } = require('../config/mongoose');

const Todo = model('Todo', {
    user:{
        type: String,
        require: true,
        unique: true
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

module.exports = Todo;