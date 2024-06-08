var arr = [["a", 1, true], ["b", 2, false]];
var strings = [];
var numbers = [];
var booleans = [];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (typeof arr[i][j] === 'string') {
            strings.push(arr[i][j]);
        } else if (typeof arr[i][j] === 'number') {
            numbers.push(arr[i][j]);
        } else if (typeof arr[i][j] === 'boolean') {
            booleans.push(arr[i][j]);
        }
    }
}
var result = [strings, numbers, booleans];

console.log(result); 
