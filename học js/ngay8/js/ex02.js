//Từ khóa this thường gọi trong các function (context)

// var user = {
//     name:"Hoàng An",
//     email:"hoagan.web@gmail.com",
//     getName:function(){
//         // var _this = this;
//         return{
//             age:32,
//             address:"Hà Nội",
//             getEmail:function(){
//                 // Thay đổi context cho hàm getEmail
//                 // console.log(_this);
//                 console.log(this.email);
//             },
//         };
//     },
// };

// user.getName().getEmail.bind(user).call();
Object.prototype.combineValue = function () {

  var result = [];
  var _this = this;
  Object.keys(this).forEach(function (key) {
    var value = _this[key];
    if (typeof value !== "function") {
      result.push(value);
    }
  });
  return result;
};

var user = {
  name: "Hoàng An",
  email: "hoagan.web@gmail.com",
  age: 32,

};
var product = {
  name: "SP 1",
  price: 12000,

};
console.log(user.combineValue());
console.log(product.combineValue());

// Object.prototype.message = "Học JS không khó";
// var a = [];
// console.log(a);
// console.log(a.message);
// var a = "Hoàng An F8";//string
// console.log(a.message);
// var b = true;//boolean
// console.log(b.message);
// var c = 10;//number
// console.log(c.message);
// var d = BigInt(10);
// console.log(d);//BigInt

// var something = function(){
//     console.log("Viết gì thì viết");
// };
// // function
// console.log(something.message);

// Array.prototype.a = "Hoàng An";
// var arr = [];
// console.log(arr.a);
// var fullname = "HoàngAn";
// console.log(fullname.a);

// Array.prototype.latest = function(){
//     return this[this.length -1];
// };
// var users = ['Item1','Item3','Item4'];
// console.log(users.latest());

// Bài tập viết lại vòng lặp map trong mảng
// Không dùng các phương thức có sẵn trong mảng trừ length
var users = ["User 1", "User 2", "User 3", "User 4"];
Array.prototype.map2 = function (callback) {
  //kiểm tra callback có phải 1 hàm hay không
  if (typeof callback !== "function") {
    return;
  }
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    var newValue = callback(value, i);
    newArr[newArr.length] = newValue;
  }
  return newArr;
};
var newArr = users.map2(function (user, index) {
  return `<h3>${index} - ${user}</h3>`;
});

console.log(newArr);
