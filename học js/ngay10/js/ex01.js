// Number kiểu dữ liệu nguyên thủy, kiểu dữ liệu số

// console.dir(Number);


// var a = 12;
// console.log(a);
// console.log(typeof a);


// kiểm tra 1 biến có phải là number hay không
/*
- typeof = number
- Không phải là NaN(not a number)
- Không phỉa là Infinity

*/

// ép kiểu :
// c1: Dùng hàm Number
// var a = "12";//string
// a = Number(a);
// console.log(typeof a, a);
//  c2: dùng hàm parseInt, parseFloat

// var a = "12.55ab123";//string
// a = parseFloat(a);
// console.log(a, typeof a);

// // Tự động ép kiểu khi gặp các toán tử số học (Trừ phép +)
// var a = 10;
// var b = "5a";
// console.log(a + b);
// console.log(a - b);

// số NaN (Not a number) ===> giá trị khio tính toán thất bại


// var a = NaN;
// if (isNaN(a)) {
//     console.log("Số NaN");
// };


// // Số Infinity :sẽ vượt quá khả năng lưu trữ

// var a = 10000 ** 100000;
// var b = 20000 ** 200000;
// console.log(b);
// console.log(a);
// console.log(a === b);

//toFixed(number) : sẽ lấy chữ số phần thập phân và tự động làm tròn --> là 1 hàm dùng rất nhiều


// var price = 1234567.789;
// // console.log(price.toFixed(2));
// console.log(price.toPrecision(4));

// ==> dùng hàm toFixed và toPrecision sẽ trả về chuỗi và phải ép kiểu

//toLocaleString(): ==> định dạng số theo quốc gia khu vực
// en-US country code lits

// var price = 1200000000000;
// console.log(price.toLocaleString("vi-VN"));


// viết 1 hàm  trả về số ngẫu nhiên từ min đến max
// javascript random number 

