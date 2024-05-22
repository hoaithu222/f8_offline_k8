var a = prompt("Nhập giá trị biến a :");
a = Number(a);
var b = prompt("Nhập giá trị biến b :");
b = Number(b);
if(isNaN(a))
a = a + b;
b = a - b;
a = a -b;
console.log(a ,b);
document.write(`Gia trị biến a : ${a} <br>`);
document.write(`Gia trị biến b : ${b} <br>`);