/*
Regular Expression (Regex)
- Tập hợp các ký hiệu để xử lý chuỗi nâng cao
- Viết được bằng ngôn ngữ Perl
- Xuất hiện ở hầu hết các ngôn ngữ lập trình
- Bao gồm chức năng chính: 
+ So khớp: Khớp 1 chuỗi thỏa mãn điều kiện của biểu thức
+ Cắt chuỗi: Cắt chuỗi con từ chuỗi cha theo biểu thức
+ Thay thế: Thay thế 1 chuỗi khớp với biểu thức thành giá trị mới

Học Regex là học viết biểu thức, chứ không phải học hàm xử lý

Cấu tạo pattern: 
/ky_hieu/modifier
- ky_hieu: Ký hiệu của biểu thức chính quy
- modifier: Cấu hình cho biểu thức
+ g: Global: Khớp toàn chuỗi
+ u: Unicode: Hỗ trợ tiếng việt
+ i: Không phân biệt chữ hoa, thường

Website test: https://regex101.com/
*/

// const pattern = /hoangan/g;
// const pattern = new RegExp("hoangan", "g");
// console.log(pattern, typeof pattern);

//So khớp: Dùng hàm test
//Cắt chuỗi: Dùng hàm match
//Thay thế: Dùng hàm replace

//Ký hiệu thường dùng
/*
- chuoi ==> Tìm kiếm chuoi có trong chuỗi cha hay không?
- ^ (Đặt đầu biểu thức) ==> Khớp biểu thức có nằm ở đầu chuỗi không?
- $ (Đặt ở cuối biểu thức) ==> Khớp biểu thức có nằm ở cuối chuỗi không?
- [A-Z]: Chữ hoa
- [a-z]: Chữ thường
- [0-9]: Số
- [char_list]: Các ký tự được khai báo
==> Lưu ý: Các biểu thức bên trong cặp [] quan hệ theo điều kiện hoặc
Mặc định độ dài các biểu thức là 1 ký tự

{min,max} ==> Khớp độ dài của biểu thức từ min đến max
{min,} ==> Khớp độ dài của biểu thức >= min
{value} ==> Khớp độ dài biểu thức bằng value

3 ký hiệu viết tắt của độ dài: 
+ ==> {1,}
* ==> {0,}
? ==> {0,1}

Các ký hiệu đặc biệt (Cần phải thêm escape (\))
/
[
]
+
:
?
*
-
.
=
...
*/
// const str = "hoanganit19";
// const pattern = /[a-z]/g;
// const check = pattern.test(str);
// console.log(check);

/*
Kiểm tra username hợp lệ: 
- Chỉ chấp nhận chữ thường, số, -, _
- Độ dài từ 5 ký tự trở lên
- Bắt đầu bằng chữ hoặc gạch dưới
*/
// const pattern = /^[a-z_][a-z-_0-9]{4,}/;
// const username = "hoanganit19";

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

Hoặc và phủ định: 
- Hoặc: | (Nhóm vào ngoặc tròn)
- Phủ định: ^ (Đặt trong biểu thức)

Các ký hiệu viết tắt khác: 
\d ==> Đại diện cho số
\D ==> Không phải là số
\w ==> Chữ thường, hoa, số, _
\W ==> Ngược lại của \w
\s ==> Khoảng trắng
\S ==> Không phải là khoảng trắng
*/

// const email = "hoangan.web@nodejs.fullstack.edu.vn";

//Cắt chuỗi
let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been contact@fullstack.edu.vn the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining hoangan.web@gmail.com essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions hoangan@fullstack.edu.vn of Lorem Ipsum.`;
// const pattern =
//   /[a-zA-Z][a-zA-Z0-9-_\.]+[a-zA-Z0-9]@([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9])(\.[a-zA-Z]{2,})+/g;
// const result = content.match(pattern);
// console.log(result);

//Capturing Group: Chụp 1 phần của biểu thức để lưu vào kết quả (Không áp dụng với global)
// const email = "hoangan@fullstack.edu.vn";
// const pattern =
//   /^([a-zA-Z][a-zA-Z0-9-_\.]+[a-zA-Z0-9])@(?:[a-zA-Z]|[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9])(?:\.[a-zA-Z]{2,})+$/;
// //Non-Capturing Group: Loại bỏ kết quả trong cặp ngoặc tròn (?:)
// const result = email.match(pattern);
// console.log(result);

const pattern =
  /([a-zA-Z][a-zA-Z0-9-_\.]+[a-zA-Z0-9]@((?:[a-zA-Z]|[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9])(?:\.[a-zA-Z]{2,})+))/g;
content = content.replace(
  pattern,
  `<a href="mailto:$1" title="Tên miền web: $2">$1</a>`
);
document.body.innerHTML = content;

//<a href="mailto:diachiemail">diachiemail</a>

//$1 => Group 1
//$2 => Group 2
//$3 => Group 3
//$n => Group n
