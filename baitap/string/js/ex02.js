var str = String(prompt("Nhập chuỗi kí tự :"));
var cnt = Array(256).fill(0);

for(var i = 0; i < str.length; i++){
    cnt[str.charCodeAt(i)]++;
}

document.write("Theo thứ tự từ điển tăng dần :<br>");
for(var i = 0; i < 256; i++){
    if( cnt[i] !== 0){
        document.write(` ${String.fromCharCode(i)} : ${cnt[i]} <br>`);
        cnt[i] = 0;
    }
}
