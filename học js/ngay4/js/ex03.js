// console.log(String.prototype);
// // 1. Lenght : lấy độ dài kí tự
// var str= "Học Lập Trình Không Khó F8 tại F8";
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }
// console.log(str.length);
// console.log(str);
// // 2. charAt(index) : lấy kí tự theo index
// console.log(str.charAt(10));
// // 3.charCodeAt(index) : lấy kí tự theo index và chuyển về mã ASCII
// console.log(str.charCodeAt(0));
//  4.concat : nối chuỗi
// console.log(str.concat("F8 Training","Học lập trình"));
// 5. includes(substring) kiểm tra chuỗi substring có ở trong chuỗi con hay không ? nếu có trả về true nếu không trả về false
// console.log(str.includes("Học"));
// 6.indexOf(subString) kiểm tra chuỗi substring có ở trong chuỗi con hay không ? nếu có trả về vị trí đầu tiên tìm được khong có trả về -1
// console.log(str.indexOf("F8"));
//lastIndexOf()kiểm tra chuỗi substring có ở trong chuỗi con hay không ? nếu có trả về vị trí cuối cùng tìm được khong có trả về -1
// console.log(str.lastIndexOf("Học"));
// 8.slice(start, end) : cắt chuỗi từ vị tri start đến vị trí end - 1
// console.log(str.slice(-5));
// 9.replace(str1,str2) thay thế chuỗi str1 = str2 (thay thế chuỗi ở 1 vị trí)
// console.log(str.replace("F8","F88"));
// 10. replaceAll(thay thế tất cả )
// console.log(str.replaceAll("F8","F88"));
// 11. repeat():Lặp chuỗi theo số lần xác định 
// console.log(str.repeat(6));
// 12/split() : tách chuỗi thành mảng 
// console.log(str.split(" "));
// // 13.toUpperCase(): chuyển thành chữ hoa
// console.log(str.toUpperCase());
// // 14.toLowerCase(): chuyển thành chữ thường 
// console.log(str.toLowerCase());
// var str1 = "      THU      ";
// //15. trim() xóa khoảng trắng đầu vào cuối chuỗi
// console.log(str1);
// console.log(str1.trim());
// 16. trimStart(): xóa khoảng trắng đầu chỗi
// 17. trimEnd() : xóa khoảng trắng cuối chuỗi 
// 18. startSwitch(Substring) : kiểm tra chuỗi subString có ở đầu chuỗi không
// 19.endsWidth(substring) : Kiểm tra chuỗi subString có ở cuối chuỗi hay không
// 20.match(pattern): Cắt chuỗi dựa vào biểu thức chính quy
// var path = "/khóa học /fullstack";
// console.log(path.startsWith("/"));
// var str = 'hello anh em, số điện thoại của tôi là : 0918382928 và sô tiếp theo 0220000232';
// var pattern = /(0|\+84)\d{9}/g;
// console.log(str.match(pattern));


// Bài tập 
var email = "hoangan@fullstack.edu.vn";
// lấy username của email
var result = "";
for(var i = 0; i < email.length; i++){
    if(email[i] === "@"){
        break;
    }
    result += email[i];
}
var pos = email.indexOf("@");
var username = email.slice(0,pos);
console.log(username);
// }
console.log(result);
var fullName = 'TẠ HOÀNG AN';
// var result = "";
//kiểm tra xem có phải tất cả các chữ là chữ hoa hay không

if(fullName === fullName.toLocaleUpperCase()){
    console.log("Viết Hoa");
}
else{
    console.log("Viết thường");
}
