const Reference = require('../models/Reference'),
    { ObjectId } = require('../config/mongoose').Types;

module.exports = {

    create(ref) {
        ref = ref || {};
        return Reference.create(ref);
    },
    update(refId, ref) {
        return Reference.updateOne({_id: ObjectId(refId)},{
            $set: ref
        })
    },
    select(refId) {
        return Reference.findOne({ _id: ObjectId(refId) });
    },
    delete(refId){
        return Reference.deleteOne({ _id: ObjectId(refId) });
    },
    search(criteria){
        const {tags, summary } = criteria;

        if(tags){
            return Reference.find({ tags: { $in: tags } })
        }else if(summary){
            return Reference.find( { $text: { $search: summary } } )
        }else{
            return Promise.reject(new Error('you should have seach by tags or summary!'));
        }
    }
}