/*
Biến(variables)
-cú pháp trong lập trình cho phép lưu trữ giá trị tạm thời
- biến được lưu bởi ram
- biến có thể đặt tên tùy ý theo nguyên tắc sau
+ chứa chữ thường hoa số dấu gạch dưới và $ 
+ không được bắt đầu bằng số 
+ nên đăt theo quy tắc camelcase
+ nên đặt tên biến tường minh
// khai báo biên 






*/ 
// khai báo biên
var userId,customerName, username,userEmail;
var customer;
var customerEmail;
var course = 'Fullstack';
var coursePrice = 12000;
customerEmail = 'vũ thị hoài thu';

// hiển thị dữ liệu 
// hiểm thị ở tab consol ở tab trình duyệt
// hiển thị lên giao diện trình duyệt 
// cách 1 : document.write()
// cách 2 : dùng DOM   

// lưu ý giá trị của biến có thể đưa vào cả 1 chuỗi html
// var welcome = "<h2>Học "+course+" lập trình không khó</h2>";
// backtick(``) --> template string 
// document.write(customerEmail);
// 8 kiểu dữ liệu trong js
/*
- string chuỗi
-bigInt : số nguyên lớn 
-boolean : đúng sai
-undefine : không xác định 
-null : rỗng
-symbol
-object:đối tượng 
-number:số
chia làm 2 nhóm 
+kiểu dữ liệu nguyên thủy: string number bigInt undefine null boolean symbol
+ kiểu dữ liệu tham chiếu: object


*/ 

var welcome = `<h2>Học lập trình ${course} không khó</h2> 
<h2>Học lập trình ${course} không khó</h2>`;
document.write(welcome);