function convert(n) {
    if (n === 0) {
        console.log(" Không");
        document.write(" Không");
    } else if (n == 1) {
        console.log(" Một");
        document.write(" Một");
    } else if (n === 2) {
        console.log(" Hai");
        document.write(" Hai");
    } else if (n === 3) {
        console.log(" Ba");
        document.write(" Ba");
    } else if (n === 4) {
        console.log(" Bốn");
        document.write(" Bốn");
    } else if (n === 5) {
        console.log(" Năm");
        document.write(" Năm");
    } else if (n === 6) {
        console.log(" Sáu");
        document.write(" Sáu");
    } else if (n === 7) {
        console.log(" Bảy");
        document.write(" Bảy");
    } else if (n === 8) {
        console.log(" Tám");
        document.write(" Tám");
    } else {
        console.log(" Chín");
        document.write(" Chín");
    }
}
// function latNguoc(n) {
//     var result = 0;
//     while (n) {
//         result = result * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return result;
// }

// n = latNguoc(n);
var n = Number(prompt("Nhập giá trị của n :"));
if (isNaN(n) || n === null || n === " ") {
    console.log("Vui lòng nhập một số hợp lệ.");
    document.write("Vui lòng nhập một số hợp lệ.");
}
if (n == 0) {
    console.log("Không");
    document.write("Không");
}
var a = [];
while (n) {
    a.push(n % 10);
    n = Math.floor(n / 10);
}
a.reverse();


if (a.length === 1) {
    convert(a[0]);
}
else if (a.length === 2) {
    if (a[0] === 1 && a[1] === 0) {
        console.log(" Mười");
        document.write(" Mười");
    }
    else if(a[1] !== 0 && a[1] !== 1 && a[2] === 0) {
        convert(a[0]);
        console.log(" Mươi");
        document.write(" Mươi");
        // convert(a[1]);
    }
    else{
        convert(a[0]);
        console.log(" Mươi");
        document.write(" Mươi");
        convert(a[1]);
    }
} 
else if (a.length === 3) {
    convert(a[0]);
    console.log(" Trăm");
    document.write(" Trăm");
    if(a[1] === 0 && a[2] === 0){
       //Không cần in 
    }
    else if(a[0] !== 0 && a[1] === 0 && a[2] !== 0){
        console.log(" Lẻ ");
        document.write(" Lẻ ");
        convert(a[2]);
    }
    else{
        convert(a[1]);
        convert(a[2]);
    }
}
else {
    convert(a[0]);
    console.log(" Ngàn");
    document.write(" Ngàn");
    if(a[0] !== 0 && a[1] === 0 && a[2] === 0 && a[3] === 0){

    }
    else{
    convert(a[1]);
    console.log(" Trăm");
    document.write(" Trăm");
    // console.log("Mươi");
    // document.write("Mươi");
    if(a[2] === 1 && a[3] === 0){
        document.write(" Mười");
    }
   else if(a[2] !== 0 && a[2] !== 1 && a[3] === 0){
       convert(a[2]);
       console.log(" Mươi");
       document.write(" Mươi");
   }
   else if((a[0] !== 0 && a[1] === 0 && a[2] === 0 && a[3] !== 0)|| (a[0] !== 0 && a[1] !== 0 && a[2] === 0 && a[3] !== 0)){
    console.log(" Lẻ ");
    document.write(" Lẻ ");
    convert(a[3]);
    }
    // else if(a[0] !== 0 && a[1] !== 0 && a[2] === 0 && a[3] !== 0){
        
    // }
    else{
        convert(a[2]);
        convert(a[3]);
    }
    }
}
