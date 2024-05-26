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
var n = Number(prompt("Nhập giá trị của n:"));
var a = [];
for(var i = 0; i <n; i++){
    var tmp = Number(prompt(`Nhập giá trị phần tử thứ ${i+1} :`));
    a.push(tmp);
}
var cnt = 0, sum = 0, check = true;

for(var i = 0; i < n; i++){
    if(isPrime(a[i])){
        sum += a[i];
        cnt++;
    }
    else{
        check = false;
        
    }
}
if(check){
    var average = sum / cnt;
console.log(average.toFixed(3)); 
document.write(average.toFixed(3));

}
else{
    console.log("Không có số nguyên tố");
    document.write("không có số nguyên tố"); 
}