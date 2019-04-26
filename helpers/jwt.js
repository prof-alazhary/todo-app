const jwt = require('jsonwebtoken');

module.exports = {
    createToken(id) {

        const token = jwt.sign({
            id
        }, appConfig.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        return token;
    },

    verifyToken(token){
        return jwt.verify(token,appConfig.secret);
    }

}