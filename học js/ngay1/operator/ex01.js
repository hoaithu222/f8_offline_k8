/* 9 nhóm toám tử trong js

Biểu thức = toán tử + toán hạng 
total = a + b + c
*/
// 1.toán tử số học : +, -, *, /, %(chia lấy dư),**(lũy thừa)  
// ++, -- 
// var a = 10;
// // a = a + 1;
// a++;
// console.log(a);

// var b = 2;
// var c =  a**b;
// console.log(c);
/*phân biệt a++ và ++ a*/
/* 
-giống nhau
đều tăng biến a lên 1 đơn vị
- khác nhau 
a++ thì giá trị biểu thức sẽ trả về trước khi biến a đươc tăng 
++a thì giá trị biểu thức trả về sau khi biến a được tăng

*/  
// var a  = 1;
// var b  = a++;

// console.log(`a = ${a}`,`b = ${b}`);


// var count = 1;
// var total = count++ + ++count + 5 + count++ + ++count;
           
// console.log(total);



/* 
toán tử so sánh
>, < , >= , <= , ==(so sánh giá trị ) , ===(so sánh giá trị và kiểu dữ liệu) , ! , !=, !==

==> lưu ý kết quả của toán tử so sánh sẽ trả về kiểu dữ liệu boolean(true hoặc false)


--> auto dùng ba dấu bằng 
*/ 
// var a= 10;
// var b = 10;
// var c = a === b;
// console.log(c);
/*
 toán tử gán
 a = 10;
 
 */ 
// var a = 10;

// console.log(a);
// a %= 7;

// console.log(a);
// toán tử lý luận : and (&&) , or(||), not (!)
//dùng để kết hợp các biểu thức con lại với nhau 

// var a = 11;
// var c = a >= 10 && a <= 15;
// console.log(c);
// 5.toán tử 3 ngôi
// điệu kiện ? giá trị đúng : giá trị sai
// var a = 9;
// var b =  a >= 10 ? 12:0;
// console.log(b);
// var a = 10;
// var b = 1 +2 + 3 + a >= 15?20:10 + 5 + 2;
// console.log(b);

// được đưa vào 1 biểu thức 

//6. toán tử nullish(??)
// kiểm tra xem giá trị có bằng null hoặc undefine  hay không nếu bằng 1 trong 2 giá trị thì lấy phía sau 

// ngược lại sẽ lấy phía trước

// var a = null;
// var b = a ?? "F8";
// console.log(b);
// var a = 1;
// var b = a === null || a === undefined ? "F8":a;
// console.log(b);

// thể hiện toán tử nullish bằng toán tử 3 ngôi

//  7. Truthy và Falsy

/*
Falsy : trong điều kiện cần phải ép kiểu dữ liệu sang Boolean mà trả về false ---> falsy
- 0 , undefined , null , false ,"", NaN

*/ 
// ví dụ minh họa lại toán tử ba ngôi
var a= 0;
//nếu a là truthy thì gán b = 20 ngược lại thì 0

var b = a?20:0;
console.log(b);