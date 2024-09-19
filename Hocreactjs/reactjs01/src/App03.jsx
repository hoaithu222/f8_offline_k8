// import Counter from "./components/Counter";

// import Form from "./components/Form";
import Posts from "./components/Posts";

export default function App() {
  // gọi ở đây
  return (
    <div>
      {/* <Counter /> */}
      {/* <Form /> */}
      <Posts />
    </div>
  );
}

/*
React hook: xuất hiện ở phiên bản 16.8
- Hàm bắt đầu bằng từ khóa use 
- Chỉ được dùng trong functional component
- Bắt buộc phải gọi cấp đầu tiên trong function component (không được ở trong hàm khác)
- Cho phép tương tác với các chức năng trong core của reactjs: State, Lifecycle,..

State  
- Trạng thái của component
- Thể hiện dự liệu của component và có thể thay đổi được trong chính component
- Khi State thay đổi --> Component sẽ bị re-render (gọi lại component)==> giao diện sẽ được cập nhập (Repaint)
- Không được thay đổi trực tiếp giá trị state mà phải thông qua hàm thay đổi 
- Khi hàm thay đổi state được gọi sẽ ưu tiên re-render ==> Cho nên giá trị của State mới sẽ khong được thay đổi ngay--> hàm bất đồng bộ
- ưu tiên hiển thị giao diện trước 
- log ở ngoài thì giá trị đã thay đổi 

*/
