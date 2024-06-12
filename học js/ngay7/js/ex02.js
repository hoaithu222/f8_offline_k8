var users = [
    ["User 1","user1@gmail.com"],
    ["User 2","user2@gmail.com"],
    ["User 3","user3@gmail.com"],
];
// console.log(users);
// yêu cầu :sửa tên của user có email là user2@gmail.com
// users = users.map(function(user){
//     if(user[1] === "user2@gmail.com"){
//         user[0] = "user 2 Update";
//     };
//     return user;
// });
// console.log(users);
var user = users.find(function(user){
    return user[1] === "user2@gmail.com";
});
user[0] = "user 2 Update";
console.log(users)
// sao chép mảng (copy)
// Shallow Copy : cấp ngoài cùng dùng các phương thức xử lý mảng mà trả về mảng mới :slice, filter, map
// 2.sử dụng cú pháp Spread(ES6)câu lệnh var b = [...a] 

var a = ["Hoàng An","hoangan.web@gmail.com"];
var b = a.map(function(user){
    return user;
});

b[1] = "Hoanganf8@gmail.com";
console.log(a);
console.log(b);

// Deep Copy : copy hết dùng dệ quy hoặc dùng vòng lặp while  ===> chuyển thành định dạng JSON, sau đó sẽ chuyển lại định dạng JSON không phải kiểm dữ liệu JSON

var json = JSON.stringify(a);
var b =JSON.parse(json);
b[1] = "hoangan@fulllstack.edu.vn";
console.log(a);
console.log(b);

function test(){
    // Array-Like Obeject : object có cấu trúc giống mảng  không duyệt được bằng foreach
    // muốn sử dụng các phương thức xử lý mảng thì phải ép về kiểu mảng 
    console.log(arguments);
}
Array.from(arguments).forEach(function(item){
    console.log(item);
});
test(5,10,15,20);
var arr2 =  {
    0:5,
    1:10,
    2:15,
    3:20,
    length:4,
};
console.log(arr2);

Array.from(arr2).forEach(function(item){
    console.log(item);
});
