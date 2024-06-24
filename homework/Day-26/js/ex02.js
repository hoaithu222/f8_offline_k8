Array.prototype.filter2 = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        return 'callback không phải 1 hàm';
    }

    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};

// Example usage:
var a = [1, 2, 3, 4, 5, 3, 2, 1, 1];
var newArr = a.filter2(function (value, index, array) {
    return value < 3;
});
console.log(newArr);

