var n = Number(prompt("Nhập giá trị của n :"));
var a = [];
var cnt = [];
var max= -100000;
for (var i = 1; i <= 100000; i++) {
    cnt[i] = 0;
}
for(var i = 0; i < n; i++){
    var tmp = Number(prompt(`Nhập giá trị phần tử thứ ${i+1}của mảng :`));
    a.push(tmp);
    if(tmp >= max){
        max = tmp;
    }
    cnt[a[i]] = 1;
}
var result = 0;
for(var i = 0; i <= max; i++){
    if(cnt[i] === 0){
        result = i;
        break;
    }
    else{
        result = max+1;
    }
}
console.log(result);
document.write(result);