// bài tập 1 : chuyển họ và tên viết sai thành viết dúng quy tắc
// function chuanHoa(a){
//     var newname = 0;
//     for(var i = 0; i < a.length; i++){
//         if(i === 0){
//             newname += a.charAt(i).toUpperCase();
//         }
//         else{
//             newname+= a.charAt(i).toLowerCase();
//         }
//     }
// }
// var fullname ="tạ hoàng an";
// fullname =fullname.trim();

// var cnt = 0;
// for(var i = 0;i < fullname.length; i++){
//     if(fullname.charAt(i) === " "){
//         ++cnt;
//     }

// }
// var newName = "";
// var pos= fullname.indexOf(" ");
// var key= fullname.slice(0,pos);
// chuanHoa(key);
// newName = chuanHoa(key);
// while(cnt!= 0){
//     pos = fullname.indexOf(pos,key.length);
//     key = fullname.slice(0,pos);
//     chuanHoa(key);
//     newName+= chuanHoa(key);
//     cnt--;
// }
// console.log(newName);

// var fullname ="tạ hoàng an";
// fullname = fullname.trim();
// fullname = fullname.charAt(0).toUpperCase();
// fullname.slice(1);
// for(var i = 0; i <fullname.length; i++){
//     var char = fullname.charAt(i);
//     var charNext = fullname.charAt(i+1);
//     if(char === " " && charNext !==" "){
//         var index = i+1;
//         fullname = fullname.slice(0,index).trim()+fullname.charAt(index).toLowerCase()+fullname.slice(index+1);
//     }
// }

// console.log(fullname);
// Bài tập 2 : kiểm tra độ mạnh yếu mật khẩu 
/*

độ mạnh yếu lớn hơn hoặc bằng 8 
kí tự phải có ít nhất 1 kí tự viết hoa
kí tự phải có ít nhất 1 kí tự thường 
kí tự phải có ít nhất 1 kí tự số
kí tự phải có ít nhất 1 kí tự đặc biệt: 


*/ 
// var password = "thu";
// var cnt1 = 0, cnt2 = 0, cnt3 = 0;

// for(var i = 0; i < password.length; i++){
//     if((passWord.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 91) || (password.charCodeAt(i) <= 122 && password.charCodeAt(i) >=97)){
//         ++cnt1;
//     }
//     else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
//         ++cnt2;
//     }
//     else{
//         ++cnt3;
//     }
// }
// if(cnt1 > 0 && cnt2 > 0 && cnt3 > 0 && password.length >= 8){
//     console.log("Mật khẩu mạnh");
// }
// else{
//     console.log("Mật khẩu không mạnh");
// }