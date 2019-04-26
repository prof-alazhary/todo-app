const express = require('express');
const router = express.Router();
const verifyToken = require('../policies/verifyToken');
const ReferenceService = require('../services/ReferenceService');

router.get('/:id', verifyToken, function (req, res, next){
    ReferenceService.select(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {        
        res.json(err);
    });
})

router.post('/new', verifyToken, function (req, res, next) {

    ReferenceService.create(req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {        
        res.json(err);
    });
});

router.put('/:id', verifyToken, function (req, res, next) {

    ReferenceService.update(req.params.id, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {     
        res.json(err);
    });
});

router.delete('/:id', verifyToken, function (req, res, next){

    ReferenceService.delete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {     
        res.json(err);
    });
})

router.post('/search', verifyToken, function (req, res, next) {
    console.log('header',req.headers)
    ReferenceService.search(req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {     
        res.json(err.message);
    });
});

module.exports = router;