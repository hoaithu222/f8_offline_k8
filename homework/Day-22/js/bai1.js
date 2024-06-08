
var n = Number(prompt("Nhập số phần tử của mảng a : "));
var a = [];
var cnt= [];
var max = -1000000;
for(var i = 0; i < n; i++){
    var tmp = Number(prompt(`Nhập giá trị thứ ${i + 1} :`));
    a.push(tmp);
    cnt[a[i]] = 1;
    if(a[i] > max){
        max = a[i];
    }
}

var m  = Number(prompt("Nhập số phần tử của mảng b : "));
var b = [];
var cnt2 = [];
for(var i = 0; i < m; i++){
    var tmp = Number(prompt(`Nhập giá trị thứ ${i + 1} :`));
    b.push(tmp);
    cnt2[b[i]] = 1;
    if(b[i] > max){
        max = b[i];
    }
}
for(var i = 0; i <= max; i++){
    if(cnt[i] === 1 && cnt2[i] === 1){
        console.log(i + " ");
        document.write(i + " ");
    }
}
