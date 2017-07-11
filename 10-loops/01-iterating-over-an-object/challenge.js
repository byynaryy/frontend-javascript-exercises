module.exports.getKeys = function(obj) {
    return Object.keys(obj);
}

module.exports.getValues = function(obj) {
    return Object.values(obj);
}

module.exports.objectToArray = function(obj) {
    var table = [];

    for(var x in obj) {
        table.push(x+" is "+obj[x]);
    }
    return table;
} 
