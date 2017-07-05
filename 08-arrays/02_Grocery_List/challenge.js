module.exports.addItem = function (item, arr) {
    if(arr.indexOf(item) == -1) {
        arr.push(item);
    }
    return arr;
}

module.exports.reverseSortedList = function(arr) {
    var sortedLst = arr.sort();
    return sortedLst.reverse();
}
