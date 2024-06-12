var n = Number(prompt("Nhấp số phần tử của mảng thứ nhất :"));
var a = [];
for(var i = 0;i < n; i++){
    var tmp = Number(prompt(`Nhập giá trị của phần tử thứ ${i+1} của mảng :`));
    a.push(tmp);
}
var m = Number(prompt("Nhấp số phần tử của mảng thứ hai :"));
var b = [];
for(var i = 0;i < m; i++){
    var tmp = Number(prompt(`Nhập giá trị của phần tử thứ ${i+1} của mảng :`));
    b.push(tmp);
}
var newArr = [];
for(var index in a){
    newArr[newArr.length] = a[index];
}
for(var index in b){
    newArr[newArr.length] = b[index];
}
newArr.sort(function (a,b){
    return a-b;
});
var result =0;
if(newArr.length % 2 !== 0){
    result = newArr[parseInt(newArr.length/2)];
}
else{
    result =(newArr[parseInt(newArr.length/2)]+newArr[parseInt(newArr.length/2 - 1)])/2;
}
console.log(result);
document.write(result);

