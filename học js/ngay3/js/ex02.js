/*
Ham function:
là cú pháp trong lập trình dùng để thể hiện các chức năng mở rộng (động từ)
- Nhóm chương tình con rễ ràng trong việc gọi lại tái sử dụng 

-Hàm trong js sẽ có hai loại hàm tự định nghĩa bởi lập trình viên, hàm có sẵn(trình duyệt, engine)
-cú pháp :
function tenHam(){
    // code
}
function tenHam(thamso1, thamso2,......){
    //code
}

!lưu ý đặt tên hàm quy tắc camelCase
- sử dụng động từ
+get
+ set 
+ make 
+ build 
+ call 
+ remove 
+ create
+ insert 
..........
// định nghĩa hàm gọi là tham số (parameter)
// khi gọi hàm thì là đối số (Argument)
hàm có giá trị trả về return 
Hàm không có giá trị trả về Void 
Sau return sẽ không hoạt động được
-Biến toàn cục : đặt bên ngoài hàm
-Biến cục bộ : khai báo ở phạm vi trong hàm chỉ được sử dụng trong phạm vi của hàm đó

!Lưu ý : Trong js không có khái niệm tham chiếu, tham trị 



*/ 

// function getMessage(msg,type= 'success'){
//     console.log("học JS không khó"); 
//     console.log(msg);
//     console.log(type);
//     return "F8";

// }
// var result = getMessage("F8-Fullstack","errors");// lời gọi hàm chủ động 
// console.log(result);

// function division(a,b){
//     if(b !== 0){
//         return a/b;
//     }
//     return 'không tính được';
// }
// var result = division(10,0);
// console.log(result);
// var data = "F8";
// function getData(){
//     return data;

// }
// function setData(value){
//     data = value;
// }
// setData("Fullstack");

// var result = getData();
// console.log(result);
// var getTotal(a,b){
//     var total =a+b;
//     return total;

// }
// var result= getTotal(10,20);
// console.log(result);
// console.log(total);
/*
anonymous function : hàm ẩn danh(Không tên)
function(){

}
muốn thực thi được hàm ẩn danh (Expression Function)
Cách 1 :gán nó vào 1 biến
Cách 2 : đưa nó và 1 hàm khác dưới 1 đối số 


*/ 

 
// const getMessage = function getMeg(){
//     console.log("Học JS không khó");
// }
// getMessage();

// var getMeg =getMessage;
// var getMeg2 = getMeg;
// // const getMessage = function(){
// //     console.log("Học JS khó");ư
// // }
// getMeg();
// getMeg2();
// getMessage();


// function someThing(){
//     console.log("F8");
// }
// someThing("F8");


// var display = function(callback){
//     // console.log(text);
//     /*
//     callback = function(){
//         console.log("học lập trình để làm gì");
//     }

//     */ 
// //    if(typeof(callback) ==="function"){
// //        callback();
// //    }
      
//     typeof(callback) ==="function"&& callback();
// }
// var handleDisplay = function(){
//     console.log("học lập trình để làm gì");
// }
// display(function(text){
//     console.log("học lập trình để làm gì");
//     console.log(text);
// });


// Từ khóa arguments 
// function max(a,b){
//     console.log(a,b);
//     console.log(arguments);
// }
// max(5,10,15,20,25,30);
// rest Parameter(tham số còn lại)



// function display(value1,value2,value3,value4){
//     console.log(value1);
//     console.log(value2);
//     console.log(value3);
//     console.log(value4)

// }
// function max(a,b,...args){
//     console.log(a,b);
//     display(...args);// Spread Operator : toán tử spread 
// }
// max(5,10,15,20,25,30);
// setTimeout , setInterval
// setTimeout(function(value1,value2,value3){
//     console.log("học lập trình không khó");
//     console.log(value1);
//     console.log(value2);
//     console.log(value3);
// },1000,"f8","f9","f10");
// var count = 0;
// var id = setInterval(function(){
//     console.log("Học lập trình", ++count);
//     document.write ("Học lập trình", ++count);
//     if(count === 5){
//         clearInterval(id);
//     }

// },1000);
var getA =  function(callback){
    setTimeout(function(){
        console.log("GetA");
        if(typeof callback === "function"){
            callback();
        }
    },1000);
}

var getB = function(callback){
    setTimeout(function(){
        console.log("GetB");
        if(typeof callback === "function"){
            callback();
        }
        
    },500);
}

var getC =  function(callback){
    setTimeout(function(){
        console.log("GetC");
        if(typeof callback === "function"){
            callback();
        }
    },1500);
};
var getD = function(text){
    console.log("getD",text);
};

getA(function() {
    getB(function() {
        getC(function() {
                getD("F8"); 
            });
        });
    });
/*
-Định nghĩa hàm con bên trong hàm khác (quan trọng)
-Closure (quan trọng )
-Kỹ thuật Thurk Function  
-IIFE
-giải thuật đệ quy





*/ 