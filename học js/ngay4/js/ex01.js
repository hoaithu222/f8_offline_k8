// var a = 10;
// function getA(){
//     console.log("getA");
// }

// console.log(a);
// getA();
// // Thuộc object là window 


// console.log(window);
// console.log(window.a);
// window.getA();
// window.console.log("Hello");
// mọi thứ taih ra trong JS đều nằm trong window (Chỉ áp dụng với client)
// cú pháp truy cập : tenObject.tenHam() hoặc tenObject.tenbien;


//hàm con 
// var a = 10;
// function display(c){
//     var b = 20;
//     function showUser(){
//         console.log(`a = ${a}`);
//         console.log(`b = ${b}`);
//         console.log(`c = ${c}`);
        
//     }
//     showUser();
// }
// display("F8");

/*
Định nghĩa 1 hàm bên trong 1 hàm khác, có thể : 
-Chỉ được gọi hàm đó bên trong hàm khác(Closure)
-Được phép sử dụng : 
+ Biến toàn cục 
+ tham số của hàm cha 
+ biến cục bộ của hàm cha
+ biến của chính nó 
+ hàm đấy sẽ được đóng gói bên trong hàm 

*/ 


// function display(){
//     function showUser(){
//         console.log("Thu");
//     }
//     return showUser;// chủ động việc gọi hàm con ở bên ngoài phạm  vi 
// }
// var showUser = display();
// showUser();
// var sum = function(a){
//     return function(b){
//         return a + b;
//     };
// };
// // bước 1 tạo hàm con
// var add = sum(10);
// // bước 2 gọi hàm con 
// var result = add(10);
// console.log(result);
// var result1 = add(20);
// console.log(result1);
// var result2 = add(30);
// console.log(result2);
// IIFE (các ngôn ngữ bậc cao đều có) hàm sinh ra chỉ dùng 1 lần không gọi lại 
// (function(a){
//     console.log("Học js không khó",a);
// })("F8");
// Giải thuật đệ quy : giải quyết các bài toán đa cấp(dùng nhiều nhất)
/*
Không biết trước được 

-dùng để sử lý bài toán đa cấp là cách dễ nhất 
*/



// function showNumber(n){
//     console.log(n);
//     if(n > 1){
//         showNumber(n-1);

//     }
// }
// showNumber(10);
//  S = 1+ 2 + 3 +...... + N
// function getTotal(n){
//     if(n === 0){
//         return 0;
//     }
//     else{
//         return n +getTotal(n-1);
//     }
// }
// var result = getTotal(10);
// console.log(result);
// function fibo(n){
//     if(n === 1 || n === 0){
//         return n;
//     }
//     else{
//         return fibo(n-1) + fibo(n-2);
//     }
// }
// console.log(fibo(20));