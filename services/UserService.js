const User = require('../models/User');

module.exports = {

    create(_user) {
        if(!_user.email) return Promise.reject(new Error('email is required!'));
        
        const user = new User(_user);
        return Promise.promisify(user.save.bind(user))();
    },
    select(userId) {
       if(userId) return Promise.promisify(User.findOne.bind(User))(userId);

       return Promise.promisify(User.find.bind(User))();
    }
}