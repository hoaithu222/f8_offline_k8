function isPrime(n){
    if(n < 2){
        return false;
    }
    for(let i = 2 ; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }

    }
    return true;
}
function sumPrice(n){
    var sum=0;
    document.write("Dãy số nguyên tố : <br>");
    for(let i = 1; i <= n; i++){
        if(isPrime(i)){
            sum+= i;
            document.write(i +" ");
            
        }
    }
    document.write(`\n`);
    
    document.write(`<br>Tổng các số nguyên tố bằng : ${sum}`);
}
var n = Number(prompt("Nhập giá trị của n :"));
sumPrice(n);
