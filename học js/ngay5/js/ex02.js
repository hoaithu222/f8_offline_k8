console.log(Array.prototype);
var users = ["User 1","User 2","User 3","User 4"];
console.log(users);
// 1. at ==> trả về phần tử theo index
console.log(users.at(2));
// 2.concat() ===> Nối nhiều mảng thành 1 mảng 
// var arr1 = ["A","B","C"];
// var arr2 = [1,2,3];
// var arr3 = [7,8,9,["F8"]];
// var arr = arr1.concat(arr2,[4,5,6],arr3);
// console.log(arr);
// 3.fill() ===> Cập nhật tất cả phần tử mảng thành 1 giá trị 
console.log(users.fill(10));
