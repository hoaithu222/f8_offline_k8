//khai báo mảng
var myArray = [1,3,5,"hello",true];
console.log(myArray);
// kiểm tra số lượng phần tử
console.log(myArray.length);
// kiểm tra 1 biến có phỉa là mảng hay không
if(Array.isArray(myArray)){
    console.log("Đây là 1 mảng");
}
else{
    console.log("Đây không phải 1 mảng");
}
// thêm 1 phần tử mới
// cú pháp :teenbienmang[index] = giá trị
myArray[myArray.length]=8; 
myArray[myArray.length]=10; 

// sửa phần tử ==> xác định index
myArray[3] = "hello F8";
console.log(myArray);
// duyệt mảng
console.log(myArray[0]);
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
// vòng lặp for in : trả về index
console.log("for-in")
for(var index in myArray){
    console.log(index,myArray[index]);
}
//  vòng lặp for of : trả về element 
console.log("For-of")
for(var a of myArray){
    console.log(a);
}
// xóa phần tử trong mảng
var deleteIndex = 3;
var newArr =[];
for(var index in myArray){
    if(+index === +deleteIndex){
        continue;
    }
    newArr[newArr.length] = myArray[index];
}
myArray = newArr;
console.log(myArray);

// thêm 1 phần tử bất kì vào đầu mảng
var newValue = "JS";
var newA =[];
newA[newA.length] = newValue;
for(var index in myArray){
    newA[newA.length] =myArray[index];
}

console.log(newA);


var newB = 4;
for(var i = myArray.length-1; i >= 0; i--){
    myArray[i+1] = myArray[i];  
}
myArray[0] = newB;
console.log(myArray);

var users =['tạ hoàng an','nguyễn tuấn anh','Nguyễn văn dũng','Phạm văn hiếu'];
var key = "an";
// yêu cầu xóa tất cả phần tử mảng có chứa key không phân biệt chữa hoa chữ thường

var newC = [];
for(var index in users){
    if(users[index].toLowerCase().includes(key.toLowerCase())){
        continue;
    }
    newC[newC.length] = users[index];
}
console.log(newC);
// tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử lớn nhất với phần tử đầu tiên
var numbers =[5,2,1,9,6];
var max= -100000,pos = 0;
for(var index in numbers){
    if(numbers[index] >= max){
        max = numbers[index];
        pos = index;
    }
}
numbers[pos] = numbers[0];
numbers[0] = max;

console.log(numbers);