function wantsJSON(req, res, next){
    const acceptField = req.headers.accept || req.headers.accepts ;
    if(acceptField && acceptField.toLowerCase().includes('json')){
        req.wantsJSON = true
    }
    next();
}

module.exports = wantsJSON;