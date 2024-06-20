// function User() {
//     this.name = 'Hoàng an';
//     this.email = "hoangan@gmail.com";
//     this.find = function () {
//         console.log(this);
//         return {
//             name: this.name,
//             email: this.email,
//         };
//     };
// }
// function Authentication() {
//     User.call(this);
//     // Thay đổi this của User thành đối tượng của Authentication ==> giúp kế thừa 
//     this.getProfile = function () {
//         return this.find();
//     };
// }
// var auth = new Authentication();
// console.log(auth.getProfile());
// console.log(auth.name);

// Gọi ý: tìm hiểu hàm call()
// var user = {
//     name: "hoàng an",
//     email: "hoangan@gmail.com",
// };
// function something(a, b, c) {
//     console.log(a, b, c);
//     console.log(this);
// };
// something.call(user, 10, 20, 30);


var users = [
    {
        id: 1,
        name: "User 1",
        email: "user1@gmail.com",
        status: true,
        createAt: "2024-06-18 00:00:00",
        updatedAt: "24-06-18 00:00:00",
    },
    {
        id: 2,
        name: "User 2",
        email: "user2@gmail.com",
        status: false,
        createAt: "2024-06-18 00:00:00",
        updatedAt: "24-06-18 00:00:00",
    },
    {
        id: 3,
        name: "User 3",
        email: "user3@gmail.com",
        status: true,
        createAt: "2024-06-18 00:00:00",
        updatedAt: "24-06-18 00:00:00",
    },
];
console.log(users);

// xây dựng tầng Transformer
function BaseTransformer(data) {
    var _this = this;
    return data.map(function (item) {
        return _this.response(item);
    });
}
function UserTransformer(data) {
    this.response = function (resource) {
        return {
            UID: resource.id,
            fullname: resource.name,
            email: resource.email,
            status: resource.status,
            statusText: resource.status ? "Active" : "Inactive",
            created_at: resource.createAt,
            updated_at: resource.updatedAt,
        };
    };
    return BaseTransformer.call(this, data);
}
var output = new UserTransformer(users);
console.log(output);


// Toán tử optional chaining(?.) nếu không có sẽ không xảy ra lỗi

// var user = {};
// user.message;
// console.log(user?.message);

var user = {};
// Sử dụng dấu ?. để tránh xảy ra lỗi 
console.log(user.getName?.());

var users = [];//nên khai báo mặc định 


if (users?.length) {
    users.forEach?.(function (user) {
        console.log(user);
    });
}
//Tham chiếu
var a = {
    name: "Hoàng An",
    email: "hoangan@gmail.com",
};
// var b = a;
/*
// var b = Object.assign({}, a); cách 1
// var b = { ...a }; //Học ở Es6
chỉ copy cấp đầu tiên 
*/


var b = JSON.parse(JSON.stringify(a));
// còn json copy hết cấp 
b.name = "Hoàng an F8";
console.log(a);
console.log(b);

var data = {
    users: ["User 1"],
};
function getNewData() {
    var value = Object.assign({}, data);
    value.message = "Hello anh em";
    return value;
}
console.log(getNewData());
console.log(data);