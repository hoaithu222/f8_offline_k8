function array(arr) {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(array(element));
        } else {
            result.push(element);
        }
    });
    return result;
}

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var newArr = array(arr);
console.log(newArr);
for(var index in newArr){
    document.write(newArr[index]+" ")
}