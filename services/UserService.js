const User = require('../models/User');

module.exports = {

    create(_user) {

        if (!_user.email)
            return Promise.reject(new Error('email is required!'));

        const user = new User(_user);

        return User.create(user);
    },
    select(userId) {
        
        if (userId)
            return User.findOne(userId);

        return User.find();
    }
}