
var n = Number(prompt("Nhập giá trị của n : "));
var a = [];
for(var i = 0; i < n; i++){
    var tmp = Number(prompt(`Nhập giá trị của phần tử thứ ${i+1}: `));
    a.push(tmp);
}
var max = -100000, min = 100000,max_Post = 0, min_Post = 0;
for(var i = 0; i < n; i++){
    if(a[i] > max){
        max = a[i];
        max_Post = i;
    }
    if(a[i] < min){
        min = a[i];
        min_Post = i;
    }
}
console.log(` Giá trị lớn nhất = ${max} và Vị trí lớn nhất = ${max_Post} <br>`)
document.write(` Giá trị lớn nhất = ${max} và Vị trí lớn nhất = ${max_Post} <br>`)
console.log(` Giá trị nhỏ nhất = ${min} và Vị trí nhỏ nhất = ${min_Post} <br>`)
document.write(` Giá trị nhỏ nhất = ${min} và Vị trí nhỏ nhất = ${min_Post} <br>`)