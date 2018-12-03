const { mongoose } = require('../config/connection');

const User = mongoose.model('User', {
    name: { type: String, default: 'user' }
});

module.exports = User;