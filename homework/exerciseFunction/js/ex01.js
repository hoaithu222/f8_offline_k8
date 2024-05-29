
function fibo(n){
    var f =[92];
    f[0] = 0;
    f[1] = 1;
    for(var i = 2; i <= n; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}
var n = Number(prompt("Nhập giá trị của N : "));
for(var i = 0; i < n; i++){
    console.log(fibo(i) +" ");
    document.write(fibo(i) +" ");
}