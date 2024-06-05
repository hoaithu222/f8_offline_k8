// khai báo mảng 
// var users = ['User 1','User 2','User 3','User 4'];
// console.log(users);

// kiểm tra số lượng phần tử
// console.log(users.length);
// kiểm tra 1 biến có pahir là 1 mảng hay không
// console.log(Array.isArray(users));
// thêm phần tử vào cuối mảng 
// users[users.length] = 'User 5';
// users[users.length]= 'User 6';
// console.log(users);
// lấy giá trị phần tử 
// console.log(users[2]);

// sửa giá trị phần tử 
// users[2] = "User Update";
// console.log(users);
// // duyệt mảng lặp qua từng phần tử của mảng
// for(var i= 0; i < users.length; i++){
//     var User = users[i];
//     console.log(User);
// }
// for(var index in users){
//     var value = users[index];
//     console.log(value);
// }
// for(var value of users){
//     console.log(value);
// }

// xóa mảng : tạo ra 1 mảng mới không có phần tử đã xóa 
// var indexDelete = 2;
// var newUser = [];
// for(var index in users){
//     if(+index === indexDelete){
//         continue;
//     }
//     var value = users[index];
//     newUser[newUser.length] = value;
// }
// 
// bài tập thêm phần tử mới vào đầu mảng
// var newValue = "User 0";
// var newArr =[];
// newArr = newValue;

// for(var index in users){
//     newArr[newArr.length] = users[index];
// }

// console.log(newArr);

// var users = ['User 1','User 2','User 3','User 4']; 
// var newValue = "User 0";

// for(var i = users.length-1 ; i>= 0; i--){
//     users[i+1] = users[i];
// }
// users[0] = newValue;
// console.log(users);

var users = [
    "Tạ Hoàng An",
    "Nguyễn Tuấn Anh",
    "Nguyễn Văn Dũng",
    "Phạm Văn Hiếu",
];
var keyword = "an";
var newUser = [];
for(var index in users){
    if(!users[index].toLowerCase().includes(keyword.toLowerCase())){
        newUser[newUser.length] = users[index];
    }
} 
console.log(newUser);


var numbers = [5,2,1,9,6];
var max = -100000, pos = 0;
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] >= max){
        max= numbers[i];
        pos = i;
    }
}
numbers[pos] = numbers[0];
numbers[0]= max;
console.log(numbers);