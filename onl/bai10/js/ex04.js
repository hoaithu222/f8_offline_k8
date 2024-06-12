// reduce(callback, initialValue)
/*
callback có 4 tham số 
- preValue
- currentValue
- index 
- array --> mảng ban đầu
initialValue : giá trị khởi tạo 


cách hoạt đông 
1.không có initialValue 
- Vòng lặp sẽ chạy từ phần tử thứ 2 cho đến hết 
- prevValue của lần lặp đầu tiên chính là phần tử đầu tiên của mảng 
- currentValue là các phần tử của mảng qua mỗi lần lặp 
- preValue của lần lặp sau chính là return của lần lặp trước
- giá trị của vòng lặp reduce sẽ là return cuối cùng

2.có initalValue
-Vòng lặp chạy từ đầu
- prevValue của lần lặp đầu tiên chính là initalValue
- currentValue là các phần tử của mảng qua mỗi lần lặp 
- preValue của lần lặp sau chính là return của lần lặp trước
- giá trị của vòng lặp reduce sẽ là return cuối cùng
*/ 

// var numbers = [5,10,15,20,25,30];
// console.log(numbers);
// var result = numbers.reduce(function(prev,current,index){
//     console.log(`prev = ${prev}`,`current = ${current}`,`index = ${index}`);
//     return current;
// },0);
// console.log(result);
// var total = numbers.reduce(function(prev,current){
//     return prev + current; 
// },0);
// console.log(total);

var numbers = [2,9,5,1,2,-5];
// tìm phần tử lớn nhất dùng reduce 
var max = numbers.reduce(function(prev,current){
    if(current >= prev){
        prev= current;
    }
    return prev;
});
console.log(max);



var users = [
    "An","Tùng","Đạt","Quân","Tùng","Nam"
];
// xóa các phần tử trùng trong mảng 

var newUsers = users.reduce(function(prev,current){
    if(!prev.includes(current)){
        prev.push(current);
    }
    return prev;
    
},[]);
console.log(newUsers); 

var arr1 = [5,2,1,6,9];
var arr2 =[2,1,6];

// lấy phần tử khác nhau của mảng

var newArr = arr1.reduce(function(prev,current){
    if(!arr2.includes(current)){
        prev.push(current);
    }
    return prev;
},[]);
console.log(newArr);
var fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

var count = fruits.reduce(function(prev, current) {
    if (!prev[current]) {
        prev[current] = 0;
    }
    prev[current]++;
    return prev;
}, []);

console.log(count);

var numbers = [1,[2,3],4,[[5,6]],7,[[[8,9]]]];
//làm phẳng mảng 
// var newNumbers = numbers.reduce(function(prev,current){
//     if(Array.isArray(current)){
//         return prev.concat(newNumbers(current));
//     }
//     return prev.concat(current);

// },[]);
// console.log(newNumbers);

// var flatArray = function(arr){
//     return arr.reduce(function(prev,current){
//         return prev.concat(Array.isArray(current)? flatArray(current) : current);
//     },[]);
// }
// var newArr = flatArray(numbers);
// console.log(newArr);
var flatArray = function(arr){
    var newArr = arr.reduce(function(prev, current){
        if(Array.isArray(current)){
            return prev.concat(flatArray(current));
        }
        return prev.concat(current);
    },[]);
    return newArr;
};
var newArr = flatArray(numbers);
console.log(newArr);