// findIndex : tìm index dựa vào điều kiện trong callback lấy index đầu tiên
//findLastIndex :tìm index dựa vào điều kiện trong callback lấy index cuối cùng
// indexOf() không thể so sánh 2 mảng với nhau
// kiểu dữ liệu nguyên thủy có thể so sánh được với nhau

// var users = [
//     ["User 1","user1@gmail.com"],
//     ["User 2","user2@gmail.com"],
//     ["User 3","user3@gmail.com"],
//     ["User 4","user4@gmail.com"],
//     ["User 5","user2@gmail.com"],
// ];
// console.log(users);
// var index = users.findIndex(function(user){
//     return user.includes("user2@gmail.com");
// });
// console.log(index);
// var index2 = users.findLastIndex(function(user){
//     return user.includes("user2@gmail.com");
// });
// console.log(index2);

// reduce (callback,initialValue)
/*
callback có 4 tham số 
-preValue 
-currentValue
-index
-array --> mảng ban đầu


initialValue giá trị khỏi tạo 
Cách hoạt động 
1.Không có initialValue (không có tham số thứ 2)
- vòng lặp reduce chạy từ lần lặp thứ 2 đến hết
- prevValue của lần lặp đầu tiên chính là phần tử đầu tiên của mảng 
- currentValue là giá trị của tùng phần tử mảng khi lặp 
- prevValue của lần lặp sau chính là return của lần lặp trước 
- giá trị của hàm reduce chính là lần lặp cuối cùng của callback



2.có initialValue 
- vòng lặp sẽ chạy từ lần lặp đầu tiên 
-prevValue của lần lặp đầu tiên chính là gái trị của initialValue
- currentValue là giá trị của tùng phần tử mảng khi lặp 
- prevValue của lần lặp sau chính là return của lần lặp trước 
- giá trị của hàm reduce chính là lần lặp cuối cùng của callback

*/
// var numbers = [5,10,15,20,25,30];
// var result = numbers.reduce(function(prev,current,index){
//     console.log(`prev = ${prev}`, `current = ${current}`,`index = ${index}`);
//     return current;
// },0);
// console.log(result);

// var total = numbers.reduce(function(prev, current){
//     console.log(`prev = ${prev}`,`current = ${current}`);
//     return prev+current;
// },0);
// console.log(total);

// var numbers=[2,9,5,1,-5];

// var max=numbers.reduce(function(prev,current){
//     if(current>= prev){
//         prev = current;
//     }
//     return prev;
// });
// console.log(max);

// var users = ["An","Tùng","Đạt","Quân","Tùng","Nam"];
// var newUsers = users.reduce(function(prev,current){
//     if(!prev.includes(current)){
//        prev.push(current);
//     }
//     return prev;
// },[]);
// console.log(newUsers);

// var arr1 = [5,2,1,6,9];
// var arr2 = [2,1,6];

// var newArr = arr1.reduce(function(prev,current){
//     if(!arr2.includes(current)){
//         prev.push(current);
//     }
//     return prev;
// },[]);
// console.log(newArr);

// var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];

// var newArr = function (arr) {
//   var newNumbers = arr.reduce(function (prev, current) {
//     if (Array.isArray(current)) {
//         return prev.concat(newArr(current));
//     }
//      else{
//         return prev.concat(current);
//      }
//   },[]);
//   return newNumbers;
// };
// var result = newArr(numbers);
// console.log(result);
var numbers =[1,2,3,4,5,6,7,8,9,10,11];
var size = 3;

// ý tưởng: [[]] ---> push từng phần tử vào mảng con 

var newNumbers = numbers.reduce(function(prev,current,index){
   //kiểm tra số lượng phần tử của mảng con cuối cùng 
   if(prev[prev.length - 1].length < size){
    prev[prev.length-1].push(current);
   }
   else{
    prev.push([current]);
   }
   return prev;
},[[]]);
console.log(newNumbers);