const { model } = require('../config/mongoose'),
    promisify = require('../helpers/promisify');

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

promisify(Todo,['updateOne','update','find','create']);

module.exports = Todo;