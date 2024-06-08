// xóa phần tử trong mảng  users.splice(index,number) index là vị trí cần xóa number là số giá trị cần xóa 
// users.splice(index,number) --> hàm này sẽ trả về mảng mới chính là các phần tử đã xóa 
// vòng lặp mảng 
var users = ["User 1","User 2","User 3","User 4"];
// 15.forEach(callback) -->tác dụng duy nhất để duyệt 
users.forEach(function(value,index){
    console.log(value,index);
});
// 16. map(callback)
// -duyệt qua từng phàn tử của mảng ban đầu
// -trả về mảng mới có số phần tử bằng số phần tử của mảng ban đầu
// -giá trị của mảng mới là return của callback 
// var newUsers = users.map(function(value,index){
//     console.log(value,index);
//     return `${index+1} - ${value}`;

// });
// console.log(newUsers);
// filter(callback) duyệt qua từng phần tử trả về 1 mảng mới giá tri phàn tử của mảng mới sẽ là các phần tử của
//  mảng ban đầu nếu callback trả về truthy

// var result = users.filter(function(value,index){
//     return 1;
// });
// console.log(result);


// var customers = [
//     ["Customer 1","customer1@gmail.com",32],
//     ["Customer 2","customer2@gmail.com",28],
//     ["Customer 3","customer3@gmail.com",31],
//     ["Customer 4","customer4@gmail.com",29],
// ];
// console.log(customers);

// var result =customers.filter(function(value,index){
//     if(!value.includes("customer2@gmail.com")){
//         return value;
//     }
//     // if(value[1] != "customer2@gmail.com"){
//     //     return value;
//     // }
// });
// var result = customers.map(function(value,index){
//     if(value.includes("customer2@gmail.com")){
//         value[2] += 2;
//     }
//     return value;

// });

// console.log(result);
var data = [];

/*
nếu status là true thì sẽ thêm vào mảng data (Kiểm tra trùng)
nếu status là false thì xóa phần tử có giá trị value

*/ 

// var addData = function(value,status){
//     var insertItem = function(item){
//         if(!data.includes(item)){
//             data.push(item);
//         }
//     }
//     var removeItem = function(item){
//         data = data.filter(function(itemData){
//             return itemData !== item;
//         });
//     };
//     if(status){
//         insertItem(value);
//     }
//     else{
//         removeItem(value);
//     }
// };
// addData("An",true);
// addData("An",true);
// addData("Quân",true);
// addData("Quân",false);
// console.log(data);
var addData = function(value,status){
    if(status){
        data.forEach(function(a){
            if(value !== a){
                data[data.length] = value;
            }
        });  
    }
    else{
        
        data.filter(function(a,index){
            if(!value === a){
                return value;
            }
        });
    }
};
addData("An",true);
addData("An",true);
addData("Quân",true);
addData("Quân",false);
console.log(data);

