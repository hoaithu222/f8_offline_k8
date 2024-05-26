function latNguoc(n){
    var result = 0;
    while(n){
        result = result * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}
var n = Number(prompt("Nhập giá trị của n :"));
console.log(latNguoc(n));
document.write(latNguoc(n));