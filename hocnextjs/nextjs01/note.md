# luồng chạy

Request => Middleware =>Root Layout (tạo nên 1 cấu trúc trang html --> Không xóa được) ==> Custom Layout(nếu có) ===> Page ==> Response

# Cơ chế Router

app/ten-folder-1/page.jsx ==> Đường dẫn : /ten-folder-1

- không chuyển page thành client
- Chỉ chuyển phần nào cần chuyển thành client thì mới chuyển và tách riêng
- Layout theo dạng nối tiếp không ghi đè

Xây dựng đường dẫn sau
/posts
/posts/id

Chỉ được dùng 1 file page.jsx sử dụng [[...]]
