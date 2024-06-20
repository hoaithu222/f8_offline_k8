// var user = {
//     name: 'hoàng an',
//     email: 'hoangan@gmail.com',
//     getInfo: function () {
//         var _this = this;
//         console.log(this);
//         //     return {
//         //         age: 32,
//         //         getName: function () {
//         //             return this.name;
//         //         },
//         //     };
//     },
// };

// // Hàm bind() dùng để thay đổi context   là 1 prototype của function 
// user.getInfo.bind("a")();
// // console.log(user.getInfo().getName.bind(user)());

function something(name, email) {
    console.log(name, email);
    console.log(this.courseName);
    console.log(this.coursePrice);
}
var obj = {
    courseName: "Fullstack",
    coursePrice: 12000,
}
// something.call(obj, "Hoàng An", "hoangan.web@gmail.com");
var arr = ["Hoàng An", "hoangan.web@gmail.com"];
// something.apply(obj, arr);

// something.call(obj, ...arr); ES6


function Person() {
    this.name = "Hoang An";
    this.email = "hoangan.web@gamil.com";
    this.getName = function () {
        return this.name;
    };
    this.getEmail = function () {
        return this.email;

    };
}
function User() {
    Person.call(this);
    this.getInfo = function () {
        console.log(this.name);
        console.log(this.getEmail());
        console.log(this.getName());
    };
}
var user = new User();
user.getInfo();


/*
1.Prototype 
2.Từ khóa this
3.Function Constructor
4.bind,call,apply
5.Kế thừa constructor
*/ 