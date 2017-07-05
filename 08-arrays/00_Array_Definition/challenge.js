module.exports.newArray = function(a, b, c, d) {
    return [a, b, c, d];
}

module.exports.firstAndLast = function(arg) {
    lst = [];
    lst[0] = (arg.shift());
    lst[1] = (arg.pop());
    return lst;
}  
