function isPrime(n){
    if(n < 2){
        return false;
    }
    for(var i = 2; i <=Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
function check(n){
    var tmp = n;
    var reverse = 0;
    while(n != 0){
        reverse = reverse*10 + n % 10;
        n=Math.floor(n/10);
    }
    if(reverse === tmp){
        return true;
    }
    else{
        return false;
    }
}
var n = Number(prompt("Nhập giá trị của n :"));
var result = 0;
for(var i =1 ; i <= 1000000; i++){
    if(isPrime(i) && check(i)&& i >= n){
        result = i;
        break;
    }
}
console.log(result);