

// var numbers = [1,2,3,4,5,6,7,8,9];
// var size = 2;


// var churkArr = numbers.reduce(function(prev,current){
//     //Kiểm tra số lượng phần tử của mảng con cuối cùng
//     if(prev[prev.length - 1].length === size){
//         prev.push([current]);
//     }
//     else{
//         prev[prev.length-1].push(current);
//     }
//     return prev;
// },[[]]);
// console.log(churkArr); 

// array, Object, Function  : khi gán 1 biến bằng 1 array, object ==> Biến mới copy địa chỉ của biến cũ ==> 2 biến cùng 1 địa chỉ 


// cách khác phục copy đươc arr
// var oldArr =["Hoàng An","hoangan.web@gmail.com"];
// var newArr = oldArr;
// var newArr  = oldArr.map(function(item){
//     return item;
// });
// Spread Operator --> học ES6
// var newArr= [...oldArr];
// shallow copy 
// sử dụng các phương thức mà trả về mảng mới map, filter, slice, reduce, 
// var newArr = oldArr.slice(0);
// Deep copy 
// sử dụng JSON : Chuyển mảng thành json và chuyển ngược lại json về mảng 
// var json = JSON.stringify(oldArr);
// var newArr = JSON.parse(json);
// newArr[0] = "Hoàng An f8";
// console.log(oldArr);
// console.log(newArr);


// hiểu nhầm 
// Kiểu dữ liệu tham chiếu dích = nguồn
// var users = ["Item 1","Item 2","Item 3"];
// function setDate(data){
//     data[0] = "Item 3";
//     console.log(data) 
// }
// setDate(users);
// console.log(users);
// tham chiếu chỉ áp dụng với object không áp dụng với kiểu nguyên thủy 
// Kiểu dữ liệu nguyên thủy

var message = "F8";
function setMessage(data){
    data = data.replace("8","9");
    console.log(data);
}
setMessage(message);
console.log(message);


// đích = nguồn 
// đích thay đổi --> nguồn thay đổi --> kiểu dữ liệu tham chiếu
var a = function(){
    console.log("Get A");
};
var b = a;
var c = b;
c();



var arr = [
   ['user 1','user1@gmail.com'],
   ['user 2','user2@gmail.com'],
   ['user 3','user3@gmail.com'],
   ['user 4','user4@gmail.com']
];
// yêu cầu thêm 1 phần tử vào mảng con nếu tìm thấy email = 'user2@gmail.com'
// var newArr = arr.map(function(item){
//     if(item.includes('user2@gmail.com')){
//         item[2] = "F8";
//         // item.push("F8");
//     }
//     return item;
// });
// console.log(newArr);
// console.log(arr);

// var result =[];
// arr.forEach(function(item){
//     if(item.includes('user2@gmail.com')){
//          result = item;
//     }
   
//  });
// result.push("F8");
// console.log(result);
// console.log(arr); 

var arr = ["Item 1","Item 2","Item 3","Item 4","Item 5"];
arr.length = 3;// getter và setter ---> học sau 

// lấy độ dài bằng 3 thì chỉ lấy 3 cái đầu tiên 
console.log(arr);


// tạo 1 mảng mới có nhiều phần tử có số lượng xác định 
var arr = Array(10);
console.log(arr);
// ví dụ tạo 1 mảng mới chứa các số từ 1 đến 20
// [1,2,3,4,5....20]
var newArr = Array.from(Array(20).keys()).map(function(item){
    return item +1;
})

console.log(newArr);

// Giải thích :
// 1.Array(number) ---> trả về 1 mảng mới có số lượng phần tử number
// 2 key() sẽ trả về index của 1 mảng 
// 3.Array.form ---> ép kiểu về mảng 
// console.log(Array.from(Array(20).keys()));

function something(){
    // Array like Object --> Object giống mảng (có length có key là số)
    Array.from(arguments).forEach(function(item){
        console.log(item);
    });
}
something(5,10,15,20,25);
