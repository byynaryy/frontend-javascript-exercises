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
    if(i == "MarkBook Air" && m >= 999) {
        return true;
    }else if(i == "MackBook Pro" && m >= 1299) {
        return true;
    }else if(i == "Mac Pro" && m >= 2499) {
        return true;
    }else if(i == "Apple Sticker" && m >= 1) {
        return true;
    }else {
        return false;
    }

}
