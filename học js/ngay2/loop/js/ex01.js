/* 
-Vòng lặp là 1 cú pháp trong lập trình cho phép 1 đoạn chương trình có thể lặp đi lặp lại theo số lần lặp cố định 
-2 Loại vòng lặp : biết trước số vòng lặp for, không biết trước số vòng lặp while và do while 
!lưu ý các vòng lặp áp dụng riêng cho các kiểu dữ liệu  ==> học sau

*/ 
// Vòng lặp for
/* 
for(giá trị khởi tạo; điệu kiện lặp; bước nhảy){
    // code
}
*/ 
// for(var i = 1; i <= 10; i++){
//     console.log("Lần lặp thứ :" + i);
// }
// for(var i = 10; i >= 1; i--){
//     console.log("Lần lặp thứ : "+ i);

// }
// for(var i = 1; i <=5; i++){
//     for(var j = 1; j <= 5; j++){
//         console.log(`i = ${i} - j = ${j}`);
//     }

// }  

// tính giá trị biểu thức
// var n = 10;
// var sum = 0;
// for(var i = 1; i <= n; i++){
//     sum += i;
// }
// console.log(sum);

// bài tập 
// var n = 6;
// var gt = 1;
// for(var i = 2; i<= n; i++){
//     gt *= i;
// }
// console.log(gt);

// var n = 5;
// var gt = 1;
// var sum = 0;
// for(var i = 1; i <= n; i++){
//     gt *= i;
//     sum += gt;
// }
// console.log(sum);



//  bài tập kiểm tra số nguyên tố 
/*
>1 
chỉ chia hết cho 1 và chính nó

*/ 
var n = Number(prompt("Nhập giá trị của N : "));
var check = true;
if(n < 1 ||n % 1 === 1){
    check = false;
}
for(var i = 2; i<= Math.sqrt(n); i++){
    if(n % i === 0){
        check = false;
        break;
    }
}

if(check    ){
    console.log("Số nguyên tố");
    document.write("Số nguyên tố")
}
else{
    console.log("Không phải số nguyên tố");
    document.write("Không phải số nguyên tố")
}
// for(var i = 1; i <= 10; i++){
//     if( i === 5){
//         continue;
//     }
//     console.log(` i  = ${i}`);
// }