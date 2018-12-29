const { model } = require('../config/mongoose');

const User = model('User', {
    name: {
        type: String,
        default: 'user'
    },
    email:{
       type: String,
       required : true,
       unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

User.findOne = Promise.promisify(User.findOne.bind(User));
User.find = Promise.promisify(User.find.bind(User));
User.create = Promise.promisify(User.create.bind(User));

module.exports = User;