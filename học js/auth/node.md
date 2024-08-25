Authentication Authorization

-Authentication : đăng nhập trả về thông tin

-Authorization: kiểm tra quyền hạn --> Trả về thông tin

trong 1 trang bất kì request nào cần author
request 1 ==> success
Request 2 --> failed --> Refresh Token --> Request 2
Request 3 --> failed --> Refresh Token --> Request 3
Request 4 --> failed --> Refresh Token --> Request 4

xử lý đăng xuất

- Call API đăng xuất do backend cung cấp --> Lưu token và blacklist ở phía backend
- Xóa token ở storage

# xây dựng class là object để xử lý http request tập trung

- xử lý refresh token quản lý các request tốt hơn
-
