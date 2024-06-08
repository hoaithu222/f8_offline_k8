// console.log(Array.prototype);
// var users = ["User 1","User 2","User 3","User 4"];
// // hàm at : lấy phần tử mảng theo index


// // console.log(users.at(0));
// // 2.concat(arr1,arr2,ar3,...) nối mảng 
// // console.log(users.concat([1,2,3],[4,5,6]));
// // 3.fill(value) thay thế tất cả phần tử trong mảng bằng 1 giá trị (thay dổi mảng ban đầu)
// // users.fill(0);
// // console.log(users);
// // 4.indexOf(value) : tìm phàn tử trong mảng và trả về index đầu tiên 
// // console.log(users.indexOf("User 1"));
// // 5.lastIndexOf(value) ==> tìm phần tử trong mảng và trả về index cuối cùng
// // console.log(users.lastIndexOf("User 2"));
// // 6.Includes() tìm phần tử trong mảng và trả về true false
// // console.log(users.includes("User 3"));
// // 7.slice(start,end) cắt mảng từ index đến end - 1
// // 8.push(value1,value2,value3,...) ==> thêm phần tử vào cuối mảng và sẽ thay đổi mảng ban đầu
// // giá trị của của hàm push là tổng số lượng phần tử của cả mảng sau khi thêm 
// // 9.thêm vào đầu unshift() thêm phần tử vào đầu mảng : giá trị trả về tổng giá trị của mảng sau khi thêm  
// // 10. xóa phần tử ở đầu mảng shift và trả về giá trị của phần tử vừa xóa(thay đổi mảng ban đầu)
// // 11. xóa phần tử ỏ cuối mảng và trả về giá trị của phần tử vừa xóa(thay đổi mảng ban đầu)
// // 12. reverse() ==> đảo ngược mảng trả về mảng mới và thay đổi mảng ban đầu
// // 13.join():  nối mảng thành chuỗi 
// // console.log(users.join(" "))
// // 14.sort(): sắp xếp mảng theo kí tự tăng dần
// // sắp xếp theo kí tự : a, b ,c
// /* Lưu ý hàm sort sẽ nhân vào 1 callbacks
// function callbackSort(a,b){
//     // a: phần tử sau 
//     // b: phần tử trước 
//     // Nếu hàm này trả vè giá trị âm sẽ tự động đổi chỗ 


// }

// */ 
// // var users=["An","Dũng","Tâm","Hạnh"];
// // users.sort();
// // console.log(users);

// // var numbers = [5,1,2,100,10];
// // numbers.sort(function(a,b){
// //     // điều kiện sắp xếp tăng dần
// //     // return a-b
// //     if(b > a){
// //         return -1;
// //     }
   
// // })
// // // console.log(numbers)
// var users =[
//     'Tạ Hoàng An',
//     'Lưu Anh Quân',
//     'Lê Đức Nam',
//     'Đặng Ngọc Sơn',
//     'Trần Công Lực'
// ];
// // //Sắp xếp mảng sau theo thứ tự tăng dần theo tên 
// function name(a){
//     var b = a.split(" ");
//     var result = b[b.length-1];
//     return result;
// }
// // var newName =[];
// // for(var i = 0; i < users.length; i++){
// //     newName[newName.length] = name(users[i]);
// // }
// users.sort(function (a,b){
//     return name(a).localeCompare(name(b));
// });
// console.log(users);

// // vòng lặp
// // var users =['Item 1','Item 2','Item 3','Item 4'];
// // forEach(callback): chỉ có tác dụng duy nhất duyệt từng phần tử của mảng 
// /*
// callback sẽ có 3 tham số
// -value 
// -index
// -array :mảng ban đầu
// */ 
// // users.forEach(function(value,index){ 
// //     console.log(value,index);
// // })

// // map(callback) 
// /*-Duyệt qua từng phần tử của mảng ban đầu
// trả về mảng mới có số lượng phần tử bằng số lượng phần tử ban đầu
// giá trị từng phần tử của mảng mới là return của callback

// */ 
// // var newArr = users.map(function(value,index){
// //     console.log(value,index);
// //     return 1;

// // });
// // console.log(newArr);
// // fillter(callback) 
// /*
// Duyệt qua từng phần tử của mảng ban đầu
// - Trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback sẽ return về truthy


// */ 
// // var newArr = users.filter(function(value,index){
// //     console.log(value,index);
// //     if(index > 1){
// //         return true;
// //     }
// // });
// // console.log(newArr);
// // var customers =[
// //     ["Customer 1","customer1@gmail.com", 32],
// //     ["Customer 2","customer2@gmail.com", 28],
// //     ["Customer 3","customer3@gmail.com", 31],
// //     ["Customer 4","customer4@gmail.com", 29],
// // ];
// //xóa khách hàng có email : customer2@gmail.com
// // console.log(customers);
// // var newArr = customers.filter(function(Customer){
// //     // return Customer[1] != "customer2@gmail.com";
// //     return !Customer.includes("customer2@gmail.com");
// // });
// // console.log(newArr);
// // tăng tuổi của khách hang customer2@gmail.com lên 2 tuổi

// // var newArr = customers.map(function(Customer){
// //     if(Customer.includes("customer2@gmail.com")){
// //         Customer[2] += 2;
// //     }
// //     return Customer;

// // });
// // console.log(newArr);
//  var data =[];
//  function addData(value,status){
//     var addItem = function(item){
//         if(!data.includes(item)){
//             data.push(item);
//         }
//     };
//     var removeItem = function(item){
//         data = data.filter(function(_item){
//             return item!= _item;
//         });
//     };
//     if(status){
//         return addItem(value);
//     }
//     removeItem(value);
//  }
// addData("An",true);
// addData("An",true);
// addData("Quân",true);
// addData("Quân",false);
// console.log(data);
//some(callback) : một vài --> duyệt qua từng phần tử của mảng 
/*
trả về true --> khi có ít nhất 1 lần return truthy về callback
trả về false --> khi có tất cả giá trị là false
*/ 
// var numbers = [1,2,5,7,9];
// // kiểm tra có ít nhất 1 giá trị là số chẵn
// var result = numbers.some(function(value,index){
//     console.log(value,index);
//     return value % 2 === 0;
// });
// console.log(result);

// every(callback) ngược lại some là tất cả đều đúng
// var numbers = [1,2,5,7,9];
// kiểm tra xem tất cả có phải là số lẻ không ?
// var kq = numbers.every(function(value,index){
//     return value % 2 !== 0;

// });
// console.log(kq);
// find(callback): tìm 
/*
điều kiện trả về phần tử đầu tiên tìm được filter --> trả về mảng thì trả về tất cả phần tử tìm được 
find thì trả về giá trị đầu tiên tìm được

*/ 
// var result1 = numbers.filter(function(value,index){
//     return value> 2;
// });
// console.log(result1);
// var result2 = numbers.find(function(value,index){
//     return value >2;

// });
// console.log(result2);
// findLast(callback) : tìm phần tử cuối cùng 
// findIndex(callback): tìm index đầu tiên
// findLastIndex(callback): tìm index cuối cùng 
var users = [
    ["A","A"],
    ["B","B"],
    ["C","C"],
    ["D","D"],

];
console.log(users);
// yêu cầu tìm index của mảng ["B","B"] trong mảng users
var arr = ["B","B"];
var index = users.findIndex(function(user){
    return user.join() === arr.join();
});
console.log(index);
var arrA = [1,4,3,2];
var arrB = [5,2,6,7,1];
var result = [];
arrA.forEach(function(item){
    if(arrB.includes(item)){
        result.push(item);
    }
});
console.log(result);