// String: quan trọng chuỗi là tập hợp các kí tự 
// khai báo "", '',``
var fullName = "thu";
console.log(fullName);


// Kiểm tra kiểu dữ liệu chuỗi 
if(typeof fullName ==='string'){
    console.log("Kiểu chuỗi");
}
//ép kiểu dữ liệu khác về chuỗi 
num = String(number);
var number = 20;

number = number+" ";
console.log(typeof number);
var a = 1;
 a= Boolean(a);
 console.log(a,typeof a);


 // String, Boolean, Number ===> hàm tạo (Function Constructor)  --> có phương thức thuộc tính để xử lý
//String kiểu dữ liệu nguyên thủy tạo ra object tạm thời khi sử dụng dấu chấm trừ null và undefine(autuboxing javascript)

 console.log(String.prototype);
 console.log(fullName.length);
//  var a = null;
//  console.log(a.length)
