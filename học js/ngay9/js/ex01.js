// constructor 
/*
Tình huống 
- Xây dựng object user
+name 
+email
+ Phone 
+ password
+login()
- Xây dựng obejct partner 
+name 
+email
+ Phone 
+ password
+login()

==> cấu trúc của object giống nhau 
===> giải pháp tạo ra 1 bản thiết kế ---> tạo các object từ các bản thiết kế đó 

*/

function User(name, email, password) {
    this.b = "F8";
    this.name = name;
    this.email = email;
    this.password = password;
    this.getInfo = function () {
        return "Name:" + this.name + " Email: " + this.email;
    };


}
// sử dụng quy tắc đặt tên PascalCase 
// Sử dụng danh từ 
// var number = 10;
// if (number >= 5) {
//     User.prototype.getNumber = function () {
//         return number;
//     };
// }
// var user = new User("Hoàng An", "hoangan@gmail.com", "123");
// var partner = new User("Lưu anh quân", "luuquan@gmail.com", "123");
// var product = {
//     name: "Sản Phẩm 1",
// }
// console.log(user);
// console.log(user.getInfo());
// console.log(partner);



// Kiểm tra 1 object thuộc constructor

// console.log(user.constructor.name);

// if (product !== null && product !== undefined && product.constructor.name === 'Object') {
//     console.log("Constructor Object");
// }
// if (user instanceof User) {
//     console.log("Constructor User");
// }

// Class/Constructor ===> Object ==> Instance(làm việc trực tiếp)

// Phương thức tĩnh và thuộc tính tĩnh(method static,static property)
// Không phụ thuộc vào Object hay intance 
// ===> cái phụ thuộc là constructor  --> truy cập trực tiếp từ constructor
User.message = "học js không khó";

User.getMessage = function () {
    var obj = new this();
    console.log(obj.a);
    console.log(obj.b);

    return "Học lập trình không khó";
};
// console.log(User.message);

// User.prototype.getMessage = function () {
//     // Đọc giá trị thuộc tính static message
//     console.log(this.constructor.message);
// };
User.prototype.a = "Xin chào các bạn ";//non-static

var user = new User();
User.getMessage();


function Person() {
    this.data = ["Item 1", "Item 2", "Item 3"];
}
Object.defineProperty(Person.prototype, {
    latest: {
        get: function () {
            return this.data[this.data.length - 1];
        },
        set: function (value) {
            this.data.push(value);
        },
    },
});
var person = new Person();
// console.log(person.latest);
// Trả về phần tử mảng cuối cùng 

// console.log(person.data);



// ví dụ 
var a = ['Item 1', "Item 2", "Item 3", "Item 4"];
console.log(a.length);
a.length = 2;
console.log(a);




