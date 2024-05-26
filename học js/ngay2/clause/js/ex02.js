
// var Price = salePrice*1.05;
// var Price_Two  = Price*0.95;

// console.log(Price);
// console.log(Price_Two);
var saleRate = 5;// phần trăm giảm giá
var salePrice = 1000000;
// var Price = salePrice + (salePrice * saleRate)/100;
var Price = salePrice /(1- saleRate/100);
console.log(Price);