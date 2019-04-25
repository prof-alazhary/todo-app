const express = require('express');
const router = express.Router();

const ReferenceService = require('../services/ReferenceService');

router.get('/:id', function (req, res, next){
    ReferenceService.select(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {        
        res.json(err);
    });
})

router.post('/new', function (req, res, next) {

    ReferenceService.create(req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {        
        res.json(err);
    });
});

router.put('/:id', function (req, res, next) {

    ReferenceService.update(req.params.id, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {     
        res.json(err);
    });
});

router.delete('/:id', function (req, res, next){

    ReferenceService.delete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {     
        res.json(err);
    });
})

router.post('/search', function (req, res, next) {
    ReferenceService.search(req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {     
        res.json(err.message);
    });
});

module.exports = router;