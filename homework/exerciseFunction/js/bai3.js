
function convert(n){
    if(n === 0){
        console.log("Không");
    }
    else if(n == 1){
        console.log("Một")
    }
    else if(n === 2){
        console.log("Hai");
    }
    else if(n === 3){
        console.log("Ba");
    }
    else if(n === 4){
        console.log("Bốn");
    }
    else if(n === 5){
        console.log("Năm")
    }
    else if(n ===6){
        console.log("Sáu")
    }
    else if(n === 7){
        console.log("Bảy")
    }
    else if(n === 8){
        console.log("Tám")
    }
    else{
        console.log("Chín");
    }
}
function lapNguoc(n){
    var result = 0;
    while(n){
        result = result * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}
var n = Number(prompt("Nhập giá trị của n :"));
n = lapNguoc(n);
if(n == 0){
    console.log("Không");
}
var a = [];

while(n){
    a.push( n% 10);
    n = Math.floor(n/10);
}
if(a.length === 1){
    convert(a[0]);
}
else if(a.length === 2){
    convert(a[0]);
    console.log("Mươi");
    
    convert(a[1]);
}
else if(a.length === 3){
    convert(a[0]);
    console.log("Trăm");
    convert(a[1]);
    convert(a[2]);
}
else{
    convert(a[0]);
    console.log("Nghìn");
    convert(a[1]);
    console.log("Trăm");
    convert(a[2]);
    console.log("Mươi");
    convert(a[3]);

}