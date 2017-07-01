module.exports.formLetter = function(firstName, senderName, message) {

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
};

module.exports.findFirstMatch = function(text, searchString) {
    return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
    return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
    return text.slice(text.indexOf(searchString) + searchString.length, text.lastIndexOf(searchString));
};
