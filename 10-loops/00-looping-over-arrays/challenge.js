module.exports.sumNumbers = function(arr) {
    return arr.reduce(function(pv, cv) {return pv + cv;}, 0);
}

module.exports.splitAndLowerCaseString = function(str) {
    return str.split(',').map(Function.prototype.call, String.prototype.toLowerCase);
} 

module.exports.addIndex = function(arr) {
    var table = [];

    for(var i = 0; i < arr.length; i++) {
        table[i] = i+" is "+arr[i];
    }
    return table;
}
