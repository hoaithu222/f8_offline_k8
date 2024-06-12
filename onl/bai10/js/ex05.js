

var numbers = [1,2,3,4,5,6,7,8,9];
var size = 2;


var churkArr = numbers.reduce(function(prev,current){
    //Kiểm tra số lượng phần tử của mảng con cuối cùng
    if(prev[prev.length - 1].length === size){
        prev.push([current]);
    }
    else{
        prev[prev.length-1].push(current);
    }
    return prev;
},[[]]);
console.log(churkArr); 

// array, Object, Function  : khi gán 1 biến bằng 1 array, object ==> Biến mới copy địa chỉ của biến cũ ==> 2 biến cùng 1 địa chỉ 


// cách khác phục copy đươc arr
var oldArr =["Hoàng An","hoangan.web@gmail.com"];
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
// sử dụng JSON : Chuyển mảng thành json và chuyển ngưở lại json về mảng 
var json = JSON.stringify(oldArr);
var newArr = JSON.parse(json);
newArr[0] = "Hoàng An f8";
console.log(oldArr);
console.log(newArr);