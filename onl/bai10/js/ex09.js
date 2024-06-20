// console.dir(Object);
// var user = {
//     name: "Hoàng an",
//     email: "hoangan@gmail.com",
// }
// console.log(user);
// var user2 = Object.create(null);
// user2.name = "hoàng an";
// user2.email = "hoangan@email.com";
// console.log(user2);


// Object.create có tác dụng kế thừa prototype

// tham chiếu
// var a = {
//     name: "Hoàng an",
//     email: "Hoangan@gmail.com",
// };
// var b = a;
// // Shallow copy 
// // var b = Object.assign({},a);
// var b = { ...a };
// // Deep copy 
// var b = JSON.parse(JSON.stringify(a));
// b.name = "Hoang an F8";
// console.log(a);
// console.log(b);


var users = [
    {
        name: "User 1",
        email: "user1@gmail.com",
    },
    {
        name: "User 2",
        email: "user2@gmail.com",
    },
    {
        name: "User 3",
        email: "user3@gmail.com",
    },
    {
        name: "User 4",
        email: "user4@gmail.com",
    },
];
var email = "user2@gmail.com";
// Yêu cầu tìm user có email trên và sửa tên 
// sử dụng cách tham chiếu 
// var user = users.find(function (user) {
//     return user.email === email;
// });
// user.name = "User 222"

var newUsers = users.map(function (user, index) {
    if (user.email === ("user2@gmail.com")) {
        user.name = "User22";
    }
    return `<tr>
    <td>${index + 1}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    </tr>`
}).join('');
document.write(`<table width="100%" border="1">
    <thead>
       <tr>
         <th width="5%">STT</th>
               <th>Tên</th>
              <th>Email</th>

             </tr>
        </thead>
        <tbody>
        ${newUsers};
        </tbody>
    </table>`)

// document.write(`<table width="100%" border="1">
//         <thead>
//             <tr>
//                 <th width="5%">STT</th>
//                 <th>Tên</th>
//                 <th>Email</th>

//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>1</td>
//                 <td>Hoàng An</td>
//                 <td>hoangan@gmail.com</td>

//             </tr>
//         </tbody>
//     </table>`)

/* 
1.String 
2.Number
3.BigInt
4.Boolean
5.Symbol
6.undefined
7.null
8.Object
*/


// var a = { value: 1 };
// var b = { value: 1 };
// var c = a;
// console.log(a == b);
// console.log(a == c);
const a = 3.14;
const b = Math.ceil(a);
console.log(b);