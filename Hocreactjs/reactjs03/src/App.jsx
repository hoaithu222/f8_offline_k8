import React, { useRef } from "react";
import Input from "./components/Input";
// import MoneyTransfer from "./components/MoneyTransfer";
// import Counter from "./components/Counter";

export default function App() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef);
    inputRef.current.value = "OK";
  };
  return (
    <div>
      {/* <Counter /> */}
      {/* <MoneyTransfer /> */}
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
