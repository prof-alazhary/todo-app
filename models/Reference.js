const { model, Schema } = require('../config/mongoose'),
    promisify = require('../helpers/promisify');

const refSchema = new Schema({
    summary:{
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    tags:{
       type: Array,
       default: []
    }
});

refSchema.index({summary:'text'});

const Reference = model('Reference', refSchema);

promisify(Reference,['updateOne','update','find', 'findOne','create','deleteOne']);

module.exports = Reference;