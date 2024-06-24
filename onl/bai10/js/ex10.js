// Number là kiểu dữ liệu nguyên thủy

// hàm tạo của number là Number

console.dir(Number);

// var a = 10;
// if (typeof a === 'number') {
//     console.log("Đây là 1 số");
// }
// ép kiểu dữ liệu về Number --> ép kiểu bị fail thì sẽ trả về NaN var b = "10a";
// var b = "10";
// b = Number(b);
// có thể sử dụng dấu cộng để ép kiểu
// b = parseInt(b);//ép kiểm về số nguyên
// c = parseFloat(b);//ép về kiểu số thực
// console.log(typeof b, b);

// Kiểm tra 1 số là 1 số nguyên
// var a = 10.6;
// if (Number.isInteger(a)) {
//     console.log("Là số nguyên");
// }
// else {
//     console.log('Không phải là số nguyên');
// }


// số NaN(not a Number)

// var a = 10;
// var b = "F8";
// var c = a * b;
// console.log(c);

// Trừ phép cộng thì tất cả các toán tử số học sẽ tự động ép kiểu và ép kiểu lỗi sẽ trả về NaN
// Đối với phép cộng phải tự ép kiểu

// if (Number.isNaN(c)) {
//     console.log("Lỗi tính toán");
// }
// số Infinity:sẽ vượt quá khả năng lưu trữ

// var a = 1000000;
// var b = 1000000;
// var c = a ** b;
// var d = 5000 ** 1000;
// console.log(c);
// console.log(c === d);
// if (Math.abs(c) === Infinity) {
//     console.log("Vượt quá khả năng lưu trữ")
// }

// toFixed() : hàm lấy chữ sỗ phần thập phân và làm tròn 

// var price = 123456.543721;
// console.log(price.toFixed(4));
// console.log(price.toPrecision(8));
// tolocaleString


var price = 200000000;
console.log(price.toLocaleString("en-US"));
