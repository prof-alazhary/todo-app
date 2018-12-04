const {
    mongoose
} = require('../config/mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        default: 'user'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = User;