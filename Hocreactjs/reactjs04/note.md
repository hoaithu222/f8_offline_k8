# Redux

- Thư viện quản lý Global state trong các ứng dụng Javascript
- Redux không phải của react

## Các thành phần của Redux

- Store : Kho để lưu trữ state
- Reducer: Hàm để quản lý việc cập nhật state
- Action : Object để mô tả hành động để cập nhật state
- Dispatch là 1 hàm để gửi action lên reducer
- Subscribe: Lắng nghe sự thay đổi của state trên store

## làm sao để tích hợp redux vào react

- Sử dụng thư viện React-Redux

* có sẵn components provider
* có sẵn các hook cần thiết
* useDispatch
* useReducer

- Tự động rerender khi state trên store thay đổi

## lộ trình học redux

- Redux core + kết hợp với React --> Hiểu các thành phần
- Redux toolkit + Kết hợp với React
- Redux Middleware : Thunk, saga(tự tìm hiểu)

## Redux Toolkit

- Gom các thành phần của 1 module và 1 slice
- reducer
- state
- action
- action creator

Tích hợp sẵn redux thunk
Tích hợp sẵn với Redux Devtool
