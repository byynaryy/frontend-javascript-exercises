module.exports.reversePlusOne = function(arr) {
    var lst = arr.reverse();
    if(lst[0] != 1) {
        lst.unshift(1);
    }
    return lst;
}


module.exports.plusesEverywhere = function(arr) {
    return arr.join('+');
}


module.exports.arrayQuantityPlusOne = function(arr){
    return arr.length + 1;
}
