module.exports.addItem = function(item, arr) {
    var table = [...new Set(arr.push(item))];
    return table;
}

module.exports.reverseSortedList = function(arr) {
    return arr.sort(function(a, b){return b - a});
} 

