var str = String(prompt("Nhập đoạn văn : "));
let cnt1 =0, cnt2=0,cnt3 = 0;

for(var i = 0;i < str.length; i++){
    if(str.toLowerCase().charCodeAt(i) >= 97 && str.toLowerCase().charCodeAt(i) <= 122){
        ++cnt1;
    }
    else if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
        ++cnt2;
    }
    else{
        ++cnt3;
    }

}
document.write(cnt1 + " "+ cnt2 +" "+ cnt3); 