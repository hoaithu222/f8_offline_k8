// 4.includes() ===> kiểm tra 1 phần tử có nằm trong 1 mảng hay không
var users = ["User 1","User 2","User 3","User 4"];
// 5.indexOf() ===> trả về index đầu tiên
console.log(users.indexOf("User 2"));
// 6.lastIndexOf() ==> trả về vị trí cuối cùng cảu một phần tử 
// 7.slice(start,end) : cắt mảng từ index start đến end-1 
// console.log(users.slice(-2));
// 8.join(str) nối mảng thành chuỗi
// console.log(users.join(" "));
// 9.sort():sắp xếp mảng theo thứ tự tăng dần
/*
sắp xếp kí tự
thay đổi mảng ban đầu


sort(callback())
sort(function(a,b){
   - a sẽ là phần tử sau
   - b sẽ là phần tử trước 
   -nếu hàm callback trả về giá trị âm sẽ ==> đổi chỗ a và b 
})
*/ 
// var arr = ["An","Dũng","Tùng","Anh"];
// arr.sort();
// console.log(arr);
// var numbers = [1,2,6,2,3,10];
// console.log(numbers);
// numbers.sort(function(a,b){
//     // if(b > a){
//     //     return -1;
//     // }
//     return a - b;
// });

// console.log(numbers);
var users = [
    "Tạ Hoàng An",
    "Đặng Ngọc Sơn",
    "Lưu Anh Quân",
    "Lê Đức Nam",
    "Trung Tuyển",
];
function getName(a){
    var result = a.split(" ");
    var newName = result[result.length - 1];
    return newName;
}

users.sort(function(a,b){
    return getName(a).localeCompare(getName(b));
});
console.log(users);

// 10.reverse() : đảo ngược mảng (thay đổi mảng ban đầu và trả về mảng mới)
// users.reverse();
// console.log(users);
// // 11.push() ===> thêm phần tử vào cuối mảng
// var count = users.push("Item1","Item2","Item3","Item4","Item5");
// console.log(users);
// console.log(count);
// 12.unshift(): thêm phần tử vào đầu mảng trả  về số lượng phần tử sau khi thêm 
// 13.pop() : xóa phần tử cuối mảng ---> trả về phần tử vừa mới xóa xong 
// 14. shift() ==> xóa phàn tử đầu mảng 
// var value = users.shift();
// console.log(users);
// console.log(value);

