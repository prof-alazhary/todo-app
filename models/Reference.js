const { model } = require('../config/mongoose'),
    promisify = require('../helpers/promisify');

const Reference = model('Reference', {
    summary:{
        type: String
    },
    url: {
        type: String
    },
    tags:{
       type: Array
    }
});

promisify(Reference,['updateOne','update','find','create','deleteOne']);

module.exports = Reference;