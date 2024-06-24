// DOM = Document Object Model 
/*
- Mô hình hóa tài liệu html thành các đối tượng 
Cho phép js chỉnh sửa html trên trang web
+ Các loại DOM 
- DOM Document 
- DOM element 
- DOM CSS 
- DOM Navigation
- DOM Event 
- DOM Event Listener
- DOM nodes

Bổ sung :Shadow DOM, Custom Element, Web Component, Customer Event,.....
*/
// console.log(document);
// // DOM Element :truy suất đến các thẻ html để trả về Object 
// var head = document.head;
// console.dir(head);
// var title = document.title;
// console.log(title);
// var body = document.body;
// console.log(body);
// chọn theo id --> chỉ trả về 1 element đầu tiên 
// var h2 = document.getElementById("title");
// console.log(h2);
// chọn theo class --> trả về một danh sách các element tìm được không phải là 1 mảng là 1 object 

// var listH2 = document.getElementsByClassName("title");
// console.log(listH2);
// chọn theo tagName trả về 1 danh sách các element tìm được theo tên thẻ 
// var list = document.getElementsByTagName("h2");
// console.log(list);

// Chọn theo CSS Selector   
// 1. Dùng querySelector --> trả về element đầu tiên tìm đc 
// 2. querySelectorAll --> trả về danh sách các element tìm dc dùng được forEach và không phải là 1 mảng

// var h2 = document.querySelectorAll("#title");
// console.log(h2);
// var username = document.querySelector([name = "username"]);
// var username = document.form_login.username;
// console.log(username);
// không chọn được phần tử giả lớp giả


var h2box = document.querySelector(".box .title");

var box = document.querySelector(".box");

// tất cả các trường hợp có thể đi từ cha trừ getElementId
var title = box.querySelector("title");
console.log(title);
