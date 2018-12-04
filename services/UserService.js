const User = require('../models/User');

module.exports = {

    create(name) {
        const user = new User();
        user.name = name;
        return Promise.promisify(user.save.bind(user))();
    },
    select(userId) {
       if(userId) return Promise.promisify(User.findOne.bind(User))(userId);
       return Promise.promisify(User.find.bind(User))();
    }
}