// // Prototype dùng để kế thừa các phương thức thuộc tính 


// Object.prototype.combineValue = function () {
//     // Nối tất cả các key thành 1 mảng 
//     // this đại diện cho obejct hiện tại context 
//     var arr = [];
//     var _this = this;
//     Object.keys(this).forEach(function (key) {
//         // this trong này là window <==> callback trong các h àm dều là window
//         var value = _this[key];
//         if (typeof value !== 'function') {
//             arr.push(value);
//         }
//     });
//     return arr; 
// }
// var user = {
//     name: "Hoàng An",
//     email: "hoangan@gmail.com",

// };

// console.log(user);
// console.log(user.combineValue());

// var customer = {
//     courser: 'Fullstack',
//     price: 1200,
// };
// console.log(customer.combineValue());


// Object.prototype.message = "Học Js không khó";
// var fullName = "Hoàng An F8";
// var a = [];
// console.log(a.message);
// console.log(fullName.message);
// // Trừ null và undefine thì cái gì cũng có thể truy cập vào object 

// String.prototype.last = function () {
//     return this.split(" ").slice(-1).join(" ");
// }
// console.log(fullName.last());


// var users = ['User 1', 'User 2', 'User 3', 'User 4'];
// Array.prototype.map2 = function (callback) {
//     if (typeof callback !== "function") {
//         return;
//     }
//     var newArr = [];
//     for (var i = 0; i < this.length; i++) {
//         var value = this[i];
//         var newValue = callback(value, i);
//         newArr[newArr.length] = neValue;
//     }
// }
// var newArr = users.map2(function (index, value) {
//     return `<h3>${index + 1} - ${value}</h3>`;
// });
// console.log(newArr)


/*Giả sử */
var person1 = {
    name: "Hoàng an",
    email: "hoangan@gmail.com",
    age: 32,
    getInfo: function () {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
        };
    },
};
// console.log(person1);
// console.log(person1.getInfo());

// cấu trúc object có thuộc tính nào có phương thức nào 
// Giải pháp : Tạo 1 function contructor ---> Định nghĩa cấu trúc của object 
/* Một số nguyên tắc của function contructor
- Tên hàm phải là danh từ
- Đặt tên theo quy tắc PascalCase(Kí tự đầu của mỗi từ sẽ viết hoa)
ví dụ UserService, UserCourse, ResetPasswordService 
*/


function Person(name, email, age) {

    // Thuộc tính
    this.name = name;
    this.email = email;
    this.age = age;
    this.a = "Hoc Js";
    // Phương thức 
    this.getInfo = function () {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
        };
    };
};

// Tạo object từ constructor
var person1 = new Person("Hoàng an", "hoangan@gmail.com", 32);
console.log(person1);
var person2 = new Person("Hoàng", "hoang@gmail.com", 32);
Person.prototype.message = "Học Js";

// Kiểm tra 1 object được tạo từ hàm tạo nào 
console.log(person1.constructor.name);


var users = ["User 1", "User 2", "User 3"];
if (users && users.constructor.name === 'Array') {
    console.log("Đây là mảng");
}

// Thuộc tính tĩnh và phương thức tĩnh 
/*

tĩnh phải đi từ constructor
-Không phụ thuộc vào object mà truy cập trực tiếp constructor (Hàm tạo)
Ví dụ : Array.isArray(),Object.keys(),Object.values()....

--> this trong phương thức tĩnh là constructor 
--> This trong phương thức  thông thường là object 
*/
Person.message = "Hello anh em";//static  property


//Static method

Person.getMessage = function () {
    return "Học js không khó";

};
Person.something = function () {
    console.log("something");
    console.log(this);
    console.log(new this().a);
};
Person.something();
var person1 = new Person("Hoàng an", "hoangan@gmail.com", 32);
console.log(person1.constructor.message);
