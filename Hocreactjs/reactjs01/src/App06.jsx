import { createContext, useState } from "react";
import Comment from "./components/Comment/Comment";

export const AppContext = createContext();

export default function App() {
  const [message, setMessage] = useState("Học react không khó");

  const onClick = () => {
    setMessage("Học react khó");
  };

  return (
    <div>
      <AppContext.Provider value={{ message, onClick }}>
        <Comment />
      </AppContext.Provider>
    </div>
  );
}
/*
Các bước làm việc với Context
- Tạo đối tượng context : React.createContext()
- Bọc Component Provider vào các component con cần truyền dữ liệu đến 
- Tại component cần lấy dữ liệu ===> Goi context và đưa vào useContext để nhận dữ liệu
- trường hợp chia component nhỏ --> chia sẻ 1 số component
*/
