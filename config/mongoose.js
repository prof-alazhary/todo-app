
const mongoose = require('mongoose'),
    db_name = 'todo';

    // if you deploy the app in Heroku platform and got installed "mLab MongoDB" add-on
    // then you can get the connection URI like that:
    // https://devcenter.heroku.com/articles/mongolab#getting-your-connection-uri

const mongoURI = process.env.MONGODB_URI = process.env.MONGODB_URI ||  ('mongodb://localhost/' + db_name);

    mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;