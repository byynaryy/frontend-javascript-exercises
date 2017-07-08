module.exports.createCourse = function(title, duration, students) {
    var course = {
        "title": title,
        "duration": duration,
        "students": students
    };
    return course;
}


module.exports.addProperty = function(obj, newProp, newValue) {
    if(obj.hasOwnProperty(newProp)) {
        return obj
    }else {
        obj[newProp] = newValue;
        return obj;
    }
} 


module.exports.formLetter = function(letter) {
    return "Hello "+ letter.recipient+ ",\n\n"+ letter.msg +"\n\nSincerely,\n"+ letter.sender;
}  


module.exports.canIGet = function(i, m) {
    var appleProds = {
        "MacBook Air": 999,
        "MacBook Pro": 1299,
        "Mac Pro": 2499,
        "Apple Sticker": 1
    };
    return  appleProds.hasOwnProperty(i) && m >= appleProds[i];
}
