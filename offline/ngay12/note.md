#responsive

- thiết kế web đáp ứng trên mọi thiết bị
- Dựa theo kích thước màn hình để thay đổi giao diện
- Sử dụng css thông qua at-rule @madia (Media Queries)

##Breakpoint

- điểm dừng tọa độ mà tại đó giao diện được thay dổi
- không có breakpoint cố định cho mọi dự án
- chỉ có các breakpoint phổ biến

Ví dụ:
-576px
-768px
-992px
-1200px
-1400px

## meta viewport

- đảm bảo tỷ lệ khung nhìn khi chuyển sang thiết bị có kích thước khác
- <meta name="viewport" content="width=device-width, initial-scale=1.0">\

css
@media all | screen | print and (min-width :giá trị) and (max-width:giá trị ){
selector{
code css

    }

}

# trường phái responsive

1. desktop first : đi từ màn hình lớn
   <= 1399.98px
   <= 1199.98px
   <= 767.98px
   <= 575.98px

2. Đi từ màn hinh nhỏ nhất
   > = 576px
   > = 768px
   > = 992px
   > = 1200px
   > = 1400px
