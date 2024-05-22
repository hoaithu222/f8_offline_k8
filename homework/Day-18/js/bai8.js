


function sum(n){
    if(n <=1){
        return n;
    }
    else{
        return 1/ n + sum(n-1);
    }
}
var n = Number(prompt("Nhập giá trị của n :"));
document.write(sum(n));