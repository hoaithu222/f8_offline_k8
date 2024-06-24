// console.dir(document);
// console.dir(document.body);
// console.dir(document.head);
// console.log(document.title);
// document.title = "Hello anh em F8";

// Tạo Element Node ---> Truy cập vào thẻ html trả về Object 

//  truy cập bằng id chỉ lấy 1 id đầu tiên 
// var title = document.getElementById("title");
// console.dir(title);
// ==> trên thục té ít dùng
// Lấy nhiều
// var titleLists = document.getElementsByClassName("title");
// console.log(titleLists);
// var titleLists = document.getElementsByTagName('h2');
// console.log(titleLists);

//  Trả về 1 phần tử 
// var title = document.querySelector("#title");
// console.log(title);
//  Trả về nhiều nhưng không phải là 1 mảng ta có thể dụng Array.from

//  ==> đa số sử dụng querySelector và querySelectorAll
var titleLists = document.querySelectorAll("#title");
console.log(titleLists);
// titleLists.forEach(function (item) {
//     console.log(item);
// });
Array.from(titleLists).map(function (item) {
    console.log(item);
});