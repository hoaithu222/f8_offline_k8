var n = Number(prompt("Nhập giá trị của n :"));
var cnt=[10000];
var a  = [];
var max = -100000;
for(var i = 0; i < n; i++){
    var tmp = Number(prompt(`Nhập giá trị của phần tử thứ ${i+1} :`));
    a.push(tmp);
    if(tmp >= max){
        max =  tmp;
    }
    cnt[a[i]] = 1;
}
for(var i = 0; i <=  max ; i++){
    if(cnt[i] ===1 ){
        console.log(i +" ");
        document.write(i +" ");
    }
}