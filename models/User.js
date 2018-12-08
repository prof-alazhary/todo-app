const {
    mongoose
} = require('../config/mongoose');

const User = mongoose.model('User', {
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

module.exports = User;