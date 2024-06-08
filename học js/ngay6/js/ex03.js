// some(callback) : duyệt qua từng phần tử của mảng ban đầu 
// trả về giá trị true false 
// trả về giá trị true nếu có ít nhất 1 lần return trong callback là truthy
// var numbers = [1,3,5,7,9];
//kiểm tra trong mảng nmuber có số chẫn hay không
// var check = numbers.some(function(value){
//     if(value % 2 === 0){
//         return true;
//     }
// });
// console.log(check);
// every(callback) : duyệt qua từng phần tử của mảng ban đầu
// trả về giá trị true và false
// trả về true khi tất cả các  phần tử đều đúng
// var check= numbers.every(function(value){
//     return value % 2 !== 0;
// });
// console.log(check);
// find(callback) các hoạt động giống filter sẽ trả về phần tử đầu tiên tìm được 

// findLast(callback) trả về phần tử cuối cùng tìm được
var users = ["User 1","User 2","User 3","User 4"];
var result = users.filter(function(value,index){
    return index>=1;
});
console.log(result);
var result1 = users.find(function(value,index){
    return index>=1;
});
console.log(result1);
var result2 = users.findLast(function(value,index){
    return index>=1;
});
console.log(result2);

//Bai tập 
var arrA =[1,4,3,2];
var arrB = [5,2,6,7,1];
// tìm giao giữa hai mảng 
// [1,2]


var result = arrA.filter(function(item){
    return arrB.includes(item);
});
console.log(result);
var cnt = [];
var cnt2 = [];
var max= -100000;
for(var i = 0; i < arrA.length; i++){
    cnt[arrA[i]] = 1;
    if(arrA[i] >= max){
        max = arrA[i];
    }
}
for(var i = 0; i < arrB.length; i++){
    cnt2[arrB[i]] = 1;
    if(arrB[i] >= max){
        max = arrB[i];
    }
}

for(var i = 0;i <= max; i++){
    if(arrA[i] === 1 && arrB[i] === 1){

    }
}