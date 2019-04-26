//============= script to generate jwt on the fly =============//
global.appConfig = require('./config/appConfig');
const jwt = require('./helpers/jwt'),
    id = process.argv[2] || "1234567890";

const token = jwt.createToken(id)

console.log('token--->', token)

console.log('decoded--->', jwt.verifyToken(token))