# package

- cài đặt thủ công và gỡ bỏ cũng thủ công cập nhập thủ công
- di chuyển sẽ nặng
- xung đột thư viên
- giải pháp công cụ quản lsy thư viện
  ==> thao tác thông qua giao diện dòng lệnh (CLI = Commandline Interface )
- thư viện sẽ được lưu trữu trên store

## các cong cụ

- Node Package Manager (NPM)
- Yarn --> cài nó thì phải cài npm

## lưu ý khi cài thư viện ==> sinh ra folder node_modules

## khởi tạo dự án

npm inti -y ==> Tạo ra file package.json --> quan trọng

## cài đặt Dependencies

npm i hoặc npm install

## cài đặt 1 package

npm i tên_package hoặc npm install ten_package

## cài đặt nhiều package

npm i package1 package2 package3  
-- mỗi package cách nhau bởi

## gõ bỏ Dependencies

npm uninstall ten_package

## các loại Dependencies

- simple Dependency ==> npm i ten_package
- Dev Dependency ==> npm i ten_package --save-dev

### chỉ cần cài đặt Dependencies phục vụ production

npm i -- product

## các loại cài đặt package

- local : npm i ten_package
- global : npm i ten_package -g

npm root -g ==> kiểm tra đường dẫn chứa các dependence chứa các global
npm list -g ==> liệt kê các dependencies được cài đặt global

## phiên bản

major.minor.patch
Khi chạy lệnh update của npm ==>chỉ update minor và patch

Cập nhật phiên bản update ten_package đẩy 2 số đằng sau lên phiên bản cao nhất
npm update ==> Cập nhật tất cả packages

### cài đặt dependencies theo phiên bản

npm i ten_package@phienban hoặc npm install ten_package@phienban
