var n =Number(prompt("Nhập giá trị của n :"));
var sum = 0;
for(let i = 1; i <= n; i++){
    sum += i*(i+1);
}
console.log(`Giá trị của biểu thức :${sum} `);
document.write(`Giá trị của biểu thức :${sum} `);
