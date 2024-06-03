function sort(a, n){
    for(var i = 0; i < n; i++){
        var tmp = a[i];
        for(var j = i +1; j < n; j++){
            if(a[i] > a[j]){
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }

        }
    }

}


var n = Number(prompt("Nhập số lượng giá trị của mảng :"));
if( n === 0 || n === " "){
    console.log("Vui lòng nhập giá trị hợp lệ ");
    document.write("Vui lòng nhập giá trị hợp lệ ");
}
else{
    var a = [];

for(var i = 0; i < n; i++){
    var tmp = Number(prompt(`Nhập giá trị thứ ${i+1} của mảng :`));
    a.push(tmp);
}
sort(a,n);
var pos = 0;
var x = Number(prompt("Nhập giá trị kí tự cần chèn : "));
for(var i = 0; i < n; i++){
    if(x <= a[i+1] && x >= a[i]){
        pos = i;
        break; 
    }
    else if(x >= a[n-1]){
        pos = n-1;
        break;
    }
}

for (var i = n - 1; i >= pos+1; i--) {
    a[i + 1] = a[i];
}
++n;
a[pos+1] = x;
console.log("Mảng sau khi chèn:");
document.write("Mảng sau khi chèn:");
for(var i = 0; i < n; i++){
    console.log(a[i] +" ");
    document.write(a[i] +" ");
 }
}

