
var n = Number(prompt("Nhập giá trị của N : "));

var a = [];


function reverse(n){
    while(n){
        a.push(n % 10);
        n = Math.floor(n / 10);
    }
}
reverse(n);
for(var i = 0; i < a.length; i++){
    console.log(a[i]);
    document.write(a[i]);
}