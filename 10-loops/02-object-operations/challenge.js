module.exports.copy = function(obj) {
    let objct = {}
    return Object.assign(objct, obj);
}

module.exports.extend = function(dest, src) {
    Object.assign(dest, src);
    return dest;
} 


module.exports.hasElems = function(obj, arr) {
    for(var x of arr) {
        if(!obj.hasOwnProperty(x)) {
            return false;
        }
    }
    return true;
}
