
const mongoose = require('mongoose'),
    db_name = 'todo';

let mongoURI = 'mongodb://localhost/' + db_name;


    if(process.env.NODE_ENV == 'production'){
        
        // eg: if you deploy the app in Heroku platform and got installed "mLab MongoDB" add-on
        // then you can get the connection URI like that:
        // https://devcenter.heroku.com/articles/mongolab#getting-your-connection-uri

        mongoURI = process.env.MONGODB_URI;
    }

    mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;