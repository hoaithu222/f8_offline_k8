// Object đặc tả về 1 đối tựng cụ thể vd: con người, người dùng , sản phẩm 
/*
-Cấu tạo bởi 
+Thuộc tính (biến)
+Phương thức (Hàm)


Cú pháp :
var tênObject = {
     key:value,
     key:value, 
     ....
}
===> Object Literal
// mảng là số nhiều còn object là số ít

*/
// var user = {
//     name:"Vũ thị hoài thu",
//     email:"thu0102@gmail.com",
//     age:22,
//     "address-city":"Lạng Sơn",
// };
// console.log(user);
// console.log(user.name);
// console.log(user["email"]);
// console.log(user["address-city"]);
// gán

// user.address ="Bắc Sơn";//thêm mới
// user.name = "Thu";//sửa
// delete user.age;
// console.log(user);

// // duyệt qua từng phần tử 
// for(var key in user){
//     console.log(key,user[key]);// Computed Property
// }

// hàm tạo của object là object 


// console.dir(Object);

// nối 2 object 
var object1 = {
    name: "Hoàng an",
    email: "Hoangan@gmail.con",
}
var object2 = {
    age: 32,
    role: "Teacher",
}
var object3 = {};
for (var key in object1) {
    object3[key] = object1[key];
};
for (var key in object2) {
    object3[key] = object2[key];
};
console.log(object3);

// kiểm tra 1 biến có phải là 1 Object hay không

// var a = {};
// if(typeof a === 'object' && a !== null && !Array.isArray(a)){
//     console.log("Object");
// };
// if(a && a.constructor.name === "Object"){
//     console.log("Là Object");
// }

// các hàm trong object  
// Object.keys() --> trả về 1 mảng chứa các key trong object --> trả về 1 array chứa các key


var obj = object3;
// console.log(Object.keys(obj));


// Object.keys(obj).forEach(function(key){
//     console.log(obj[key]);
// });
var user = {};
// kiểm tra object user có phần tử hay không?

if (Object.keys(user).length) {
    console.log("Có phần tử");
}
else {
    console.log("Không có");
}

// Object.values() ===> trả về 1 mảng chứa các value của object 

console.log(Object.values(obj));
// Object.entries() ===> trả về mảng 2 chiều chứa cả key và value

console.log(Object.entries(obj));
// Object.fromEntries() ===> Chuyển từ array entries(Mảng hai chiều) thành Object
var arr = [
    [
        'key1',
        'value1'
    ],
    [
        'key2',
        'value2'
    ],
    [
        'key3',
        'value3'
    ],
]
console.log(Object.fromEntries(arr));


// Object.assign(target,source): có nhiều tham số ==> Copy object source nối vào target,đồng thời cũng trả về object mới chính là object sau khi nối
var obj1 = {
    name: "Hoàng an",
    email: "hoangan@gmail.com",
}
var obj2 = {

    role: 'teacher',
    address: "Ha Noi",
}
// Nối obj2 vào obj1 

// var obj3 = Object.assign(obj1,obj2);
// console.log(obj1);
// console.log(obj3);

// nối obj1 và obj2 vào obj3 mà không làm thay đổi obj1 
var obj3 = {};
Object.assign(obj3, obj1, obj2);
// console.log(obj3);
//  console.log(obj1);
//  

var query = {
    category: 1,
    keyword: "Khóa Học FullStack",
    status: true,
}


//chuyển thành string : category = 1 & keyword = Khóa + Học +Fullstack & status = true'



// Chuyển object thành mảng các cặp [key, value]
var getQuery = Object.entries(query);

// Duyệt qua từng phần tử và xử lý giá trị
var queryString = getQuery.map(function (item) {
    var key = item[0];
    var value = item[1];

    // Nếu giá trị là chuỗi, thay thế khoảng trắng bằng '+'
    if (typeof value === 'string') {
        value = value.split(' ').join('+');
    }

    // Trả về chuỗi "key=value"
    return key + "=" + value;
});

// Kết hợp các phần tử lại thành một chuỗi query string
queryString = queryString.join('&');

console.log(queryString);

var queryString = Object.entries(query).map(function (item) {
    return item.join("=");
})
    .join("&")
    .replaceAll(" ", "+");
console.log(queryString);

