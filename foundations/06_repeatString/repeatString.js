const repeatString = function(str, num) {
    let stringRepeat = ""; 
    for (let i = 0; i < num; i++) {
        stringRepeat = stringRepeat + str;
    }
    return stringRepeat;
};

module.exports = repeatString;
