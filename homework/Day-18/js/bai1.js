var km;
km =Number(prompt("Nhập số km :"));
var price = 0;
if(isNaN(km) || km < 0){
    alert("Vui lòng nhập số km hợp lệ :");
}
if(km<= 1){
    price = km*15000;
}
else if(km > 1 && km <= 5){
    price = 1 * 15000 +(km-1)*13500;
}
else{
    price =  1 * 15000+ 4*13500 +(km-5)*11000;
    if(km> 120){
        price *=0.9; 
    }
}
console.log(`Số tiền phải trả : ${price}đ`);
document.write(`Số tiền phải trả : ${price}đ`);