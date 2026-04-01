const removeFromArray = function(arr, ...nums) {
    return arr.filter(function(item) {
        return !nums.includes(item);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
