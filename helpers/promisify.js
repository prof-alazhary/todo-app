module.exports = function (obj, methods = []) {

    methods.forEach(method => {
        obj[method] = Promise.promisify(obj[method].bind(obj));
    });

}