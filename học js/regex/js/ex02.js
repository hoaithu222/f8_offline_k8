// const pattern = /^(0|\+84)[0-9]{9}$/;
// const phone = "+84123456789";
// console.log(pattern.test(phone));

//phủ định :kiểm tra trong chuối có kí tự đặc biêt hay không
// mũ ở trong là phủ dịnh
// mũ ở ngoài là ở đầu
// const str = "A$%";
// const pattern = /[^a-zA-Z0-9-_ ]/;
// console.log(pattern.test(str));

// kiểm tra trong chuỗi có dấu chấm (.) hay không ?

// dấu chấm là lấy tắt cả

// const str = "hoangan.web";
// const pattern = /\./;
// console.log(pattern.test(str));

/*
Kiểm tra email hợp lệ 
username@domain.ext 
1.username 
- Bắt đầu bằng chữ cái 
-Chấp nhân chữ hoa thường 

*/
// const email = "hoangan.web-@gmail.com";
// const pattern=/^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@(([a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}$/mg;

// phân tích : fullstack-nodejs.fullstack.edu.vn

//cắt chuỗi
// g global
// u unicode
// i khong phan biet chu hoa chu thuong
// const str = `Hello anh em 0111111111 và 0123456789`;
// const pattern = /(0|\+84)\d{9}/g;
// const result = str.match(pattern);
// console.log(result);

// Capturing group lấy phần nào đấy
// Non-capturing group ?:
// const str = `hoangan.web@gmail.com`;

// const pattern =
//   /^([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@(?:(?:[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}$/;
// const result = str.match(pattern);

// console.log(result);

// thay thế
let content = `Lorem ipsum dolor sit  hoangan@gmail.com amet consectetur adipisicing elit. Blanditiis hoangan.web@gmail.com sit porro et ipsam eum illo error assumenda id commodi consequatur
`;
const pattern =
  /([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@((([a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}))/g;
content = content.replace(
  pattern,
  `<a href ="mailto:$1" title ="Domain:$2">$1</a>`
);
// $1 --> group 1
// $2 --> group 2

document.body.innerHTML = content;
