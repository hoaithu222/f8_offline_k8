var a = prompt("Nhập giá trị của biến a :");
a = Number(a);
var b =prompt("Nhập giá trị của biến b :");
b = Number(b);
var c =prompt("Nhập giá trị của biến c :");
c = Number(c);
let max = 0;

if(a > b && a > c){
    max = a;
}
else{
    if(b > c){
        max = b;
    }
    else{
        max = c;
    }
}
console.log(`Giá trị lớn nhất : ${max}`);
document.write(`Giá trị lớn nhất : ${max}`);