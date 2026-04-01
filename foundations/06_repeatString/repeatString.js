const repeatString = function(str, num) {
    let stringRepeat = str; 
    for (let i = 1; i < num; i++) {
        stringRepeat = stringRepeat + str;
    }
    return stringRepeat;
};

module.exports = repeatString;
