
const mongoose = require('mongoose'),
    db_name = 'todo';

let mongoURI = 'mongodb://localhost/' + db_name;

    if(process.env.NODE_ENV == 'production'){
        mongoURI = process.env.MONGODB_URI;
    }

    mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;