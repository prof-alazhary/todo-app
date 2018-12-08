
const mongoose = require('mongoose'),
    db_name = 'todo';

    mongoose.connect('mongodb://localhost/' + db_name, { useNewUrlParser: true });

module.exports = mongoose;