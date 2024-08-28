#regular expression(regex)

- Biểu thức dùng để xử lý chuỗi nâng cao

* So khớp
* Cắt chuỗi
* Thay thế

- khi làm việc với biểu thức chính quy phải xây dựng 1 pattern
  Cấu tạo patten
  /regex/modifier

* modifier là cấu hình cho biểu thức
* regex101 test biểu thức chính quy

## các kí hiệu cơ bản

string ---> So khớp chuỗi string có nằm trong chuỗi cần kiểm tra hay không
^ (dặt ở đầu biểu thức sau dấu phân cách /)==> kiểm tra biểu thức nẳm ở đầu chuỗi

$(đặt ở cuối biểu thức trước dấu phân cách / )==> kiểm tra biểu thức nằm ở cuối chuỗi
\*kí hiệu đại diện

[min-max] ==> kiểm tra các kí tự từ (A_Z,a-z,0-9)

[char_list] ===> kiểm tra các kí tự ([a,b,c])

--> lưu ý các biểu thức trong cập ngoặc vuông kết hợp với nhau theo điều kiện hoặc nếu các biểu thức không nằm trong cùng cặp ngoạc vuông ==> kết hợp với nhau theo điều kiện and và phải đúng kí tư ---> chỉ xét đúng 1 kí tự

- kí hiệu độ dài {min,} ---> độ dài biểu thức lớn hơn bằng min
  -{value} ===> độ dìa biểu thức bằng value
- {min,max} ==> độ dài của biểu thức từ min đến max

Ký hiệu viết tắt của độ dài

...

- ===> tương úng với {1,}

* ===> tương ứng với {0,}
  ? ===> tương ứng với {0,1}
  ...
