// Object : đối tượng mô tả thông tin cụ thể của đối tượng cần 

/*
-thuộc tính : Đặc điểm của đối tượng (Biến)
-Phương thức: Hành động của đối tượng (Hàm)(nó là 1 hàm)


// 2 cách để tạo Object  
- Object literal : tạo 1 object từ 1 function có tên là object hoặc dùng kí hiêu ngoặc nhọn{}
- key tồn tịa thì cập nhật key không tồn tại thì thêm mới
- Constructor 
 
*/ 
// console.dir(Object);
// var user = {
//     // key : value
//     name :"Hoàng An F8",
//     email:"Hoangan@gmail.com",
//     getName:function(){
//         return "Hoàng an";
//     },

//     course:null,
//     // chứa 1 object khác 
//     profile : {
//         age:32,
//         address :"Hà Nội",
//         "shipping-address":"Hà Nội",
//     },
// };

// user.email = 'contact@fullstack.edu.vn';
// user.course = "Fullstack";
// delete user.getName;
// console.log(user);
// console.log(user.name);
// console.log(user.getName());
// console.log(user.profile.age);
// console.log(user.profile["address"]);
// console.log(user.profile["shipping-address"]);
// duyệt các key của object 
// for(var key in user){
//     if(typeof user[key] === 'function'){
//         user[key]();
//     }
//     else if(typeof user[key] !== 'object' || user[key] === null){
//         console.log(user[key]);
//     }
// };
// var obj1 = {
//     name :"Hoàng an",
//     email:"Hoangan@gmail.com",
// };
// var obj2 = {
//     age :32,
//     role :"Teacher",
// };
// var obj3 = {};
// for(var key in obj1){
//     obj3[key] = obj1[key];
// };
// for(var key in obj2){
//     obj3[key] = obj2[key];
// };
// console.log(obj3);


// Object.keys() trả về 1 array chứa các key của object

// var user ={
//     name:"Hoàng an",
//     email:"Hoangan@gmail.com",
// };
// console.log(Object.keys(user));
// kiểm tra 1 object có empty không 
// if(!Object.keys(user).length){
//     console.log("Rỗng");
// }
// else{
//     console.log("Không rỗng")
// }

// Object.values() ==> trả về 1 mảng chứa các value của object 
// console.log(Object.values(user));


// Object.entries() ===> trả về 1 mảng hai chiểu chứa cả key và value của object

// console.log(Object.entries(user));

// Object.fromEntries() ===> trả về 1 object từ 1 mảng 2 chiều

// var arr = [
//     ['name','hoàng an'],
//     ['age',32],
//     ['address','hà nội'],
// ];
// console.log(Object.fromEntries(arr));


// Bài tập 

// var query ={
//     category :1,
//     keyword:"Khóa học fullstack",
//     status:true,
// };
// var newQuery = Object.entries(query).map(function(entryItem){
//     return entryItem.join("=");
// })
// .join("&")
// .replaceAll(" ","+");
// console.log(newQuery);
// // category=1&keyword=Khóa+học+fullstack&status=true
// //chuyển ngược lại 
// var allowArr = ["true","false"];
// var query = newQuery.split('&').map(function(item){
//     var arr = item.split("=");
//     if(!isNaN(+arr[1])){
//         arr[1] = +arr[1];
//     }
//     else if(allowArr.includes(arr[1])){
//         arr[1] = arr[1] === "true";
//     }
//     else{
//         arr[1] = arr[1].replaceAll("+"," ");
//     }
//     return arr;
// });
// query = Object.fromEntries(query);
// console.log(query);

// Object.assign(target,source, ...)===> nối các source vào target (Thay dổi object ban đầu)

var user = {
    name:"Hoàng an ",
    email:"Hoangan@gmail.com",
};
var course = {
    courseName:"Fullstack",
    coursePrice:10000,
};
// var result = Object.assign(user,course);
// console.log(result);
// console.log(user);

var result1 ={};
Object.assign(result1,user,course);
console.log(result1);
console.log(user);
