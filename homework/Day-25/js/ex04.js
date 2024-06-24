Array.prototype.reduce2 = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        return;
    }
    var prev, startIndex;
    if (initialValue !== undefined) {
        prev = initialValue;
        startIndex = 0;
    }
    else {
        prev = this[0];
        startIndex = 1;
    }
    for (var i = startIndex; i < this.length; i++) {
        prev = callback(prev, this[i], i, this);
    }
    return prev;
};
var a = [1, 2, 3, 4, 5];
var result = a.reduce2(function (prev, current, index, value) {
    return prev + current;
});
console.log(result);