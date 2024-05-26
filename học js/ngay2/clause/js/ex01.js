/*
Giúp thực thi các đoạn code dựa vào điều kiện
- 4 trường hợp
+ câu lệnh rẽ nhánh thiếu
+ câu lệnh rẽ nhánh đầy đủ
+ câu lệnh nhiều nhánh
+ câu lệnh rẽ nhánh lồng nhau 
- câu lệnh có hai lại : if else và switch case
*/ 
// var number = -10;
// if(number >= 10){
//     console.log("Dung");
// }
// else{
//     console.log("sai");
// }
// if(number < 0){
//     console.log("số âm")
// }
// else if(number >= 0 && number < 5){
//     console.log("số siêu nhỏ")
// }
// else if(number>= 5 && number < 10){
//     console.log("số nhỏ")
// }
// else if(number >= 10 && number< 15){
//     console.log("số trung bình");
// }
// else {
//     console.log("số lớn")
// } 
// var email = '';
// var password = '';
// if(!email || !password){
//     if(!email){
//         console.log("Vui lòng nhập email");
//     }
//     else{
//         console.log("Vui lòng nhập password");
//     }

// }
// else{
//     console.log("Vui lòng nhập thông tin đầy đủ");
// }



var luong = 20;
var luongNhan = 0;
if(luong < 0){
    console.log("Vui lòng nhập giá trị hợp lệ");
}
else{
    if(luong <= 5){
        luongNhan = luong;
    }
    else if(luong > 5 && luong < 15){
        luongNhan = luong*0.97;
    }
    else{
        luongNhan = luong * 0.95;
    }
    console.log(luongNhan);
}