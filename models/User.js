const { model } = require('../config/mongoose'),
    promisify = require('../helpers/promisify');

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

promisify(User,['findOne','find','create']);

module.exports = User;