var number =Number(prompt("Nhập số diện tiêu thụ :"));
if(isNaN(number) || number < 0){
    alert("Vui lòng nhập số điện hợp lệ !");
}
var price = 0;
if(number >= 0 && number<= 50){
    price = number * 1.678;
}
else if(number >= 51 && number <= 100){
    price = 50* 1.678 + (number- 50) * 1.734;
}
else if(number >= 101 && number<= 200){
    price = 50* 1.678 + 50 * 1.734 + (number - 100)*2.014;
}
else if(number >= 201 && number <= 300){
    price = 50* 1.678 + 50 * 1.734 + 100 * 2.014 + (number-200)*2.536;
}
else if(number >= 301 && number <= 400){
    price = 50* 1.678 + 50 * 1.734 + 100 * 2.014 + 100* 2.536 +(number-300)*2.834;
}
else{
    price = 50* 1.678 + 50 * 1.734 + 100 * 2.014 + 100* 2.536 +100*2.834 + (number - 400)*2.927;
}
console.log(` Số tiền phải đóng : ${price}`);
document.write(` Số tiền phải đóng : ${price}`);