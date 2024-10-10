import { forwardRef } from "react";

function Button(props, ref) {
  return <button ref={ref}>Ok chưa</button>;
}
export default forwardRef(Button);
// HOC = Higher Order Component
//  - Hàm bọc 1 component nhận vào component ban đầu
//  - Trả về component mới
//

// Ví dụ : helloK8(Button)
