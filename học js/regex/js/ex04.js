/*
Ký tự của biểu thức chính quy: /, ., [, ], +, ?, =,... ==> Muốn kiểm tra --> Thêm ký tự \ (escape)

Hoặc (|), phủ định (^)

Các ký hiệu viết tắt khác: 
\d ==> Đại diện cho số
\D ==> Không phải là số
\w ==> Chữ thường, hoa, số, _
\W ==> Ngược lại của \w
\s ==> Khoảng trắng
\S ==> Không phải là khoảng trắng
*/

// const phone = "0388875179";
// const pattern = /^(0|\+84)[0-9]{9}$/;
// console.log(pattern.test(phone));

// const str = `@!@#$`;
// const pattern = /^[^a-zA-Z0-9 ]+$/;
// console.log(pattern.test(str));

/*
Kiểm tra username hợp lệ: 
- Chỉ chấp nhận chữ thường, số, -, _
- Độ dài từ 5 ký tự trở lên
- Bắt đầu bằng chữ thường hoặc gạch dưới
*/
// const username = `hoanganit19`;
// const pattern = /^[a-z_][a-z0-9_-]{4,}$/;
// console.log(pattern.test(username));

/*
Kiểm tra email hợp lệ
username@domain.ext
1. username
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 3 ký tự trở lên
2. domain
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 1 ký tự

3. ext
- Chữ cái thường, HOA
- Tối thiểu 2 ký tự

Test: 
hoangan.web-@gmail.com ==> failed
hoangan@fullstack-.edu.vn ==> failed
*/

// const content = `Xin chao anh em, toi la 0388875179 abc xtz 0123456789`;

// const pattern = /(0|\+84)\d{9}/giu;

// const phones = content.match(pattern);
// console.log(phones);

//Capturing Group: Kỹ thuật chụp lại 1 phần của biểu thức để trả về kết quả. Thêm cặp ngoặc ()
// ==> Lưu ý: Không hỗ trợ với global

// const email = `hoangan.web@nodejs.fullstack.edu.vn`;
// const pattern =
//   /^([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@(?:[a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.(?:[a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,}$/;
// const result = email.match(pattern);
// console.log(result);

//Lazy, Greedy

//Thay thế
// const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the hoangan.web@gmail.com industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but hoangan@fullstack.edu.vn also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

// const pattern =
//   /(([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@([a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.([a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,})/g;

// const result = content.replace(
//   pattern,
//   `<a href="mailto:$1" title="Username: $2">$1</a>`
// );
// document.body.innerHTML = result;

//Đối sánh chuỗi: Chụp lại kết quả của biểu thức để đưa vào giá trị sau khi thay thế (Dựa vào capturing group)
/*
group 1 ==> $1
group 2 ==> $2
group 3 ==> $3
group n ==> $n
*/

let url = `https://fullstack.edu.vn/////`;
const pattern = /\/+$/g;
url = url.replace(pattern, "");
console.log(url);

//Package (npm)
//Module Bundler
