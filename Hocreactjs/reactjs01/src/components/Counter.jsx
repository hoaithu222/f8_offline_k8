import { useState, useEffect } from "react";

export default function Counter() {
  // const [tenState, tênhamthaydoi] = useState(giatrimacdinh);
  const [count, setCount] = useState(0);

  // không được đê setState ở đây
  const handleIncrement = () => {
    setCount(count + 1);

    console.log(count);
  };
  const handleDecrement = () => {
    // thường hay sử dụng cách này có thể lấy được giá trị cũ và viết thêm logic
    setCount((prevCount) => {
      //console.log(prevCount)
      return prevCount - 1;
    });
  };
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmounting");
      //
    };
  }, []);
  useEffect(() => {
    console.log(`Count update`, count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      {count == 10 && <p>Thành công</p>}
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
