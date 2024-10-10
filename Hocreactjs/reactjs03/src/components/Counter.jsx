import React, { useState } from "react";
import Content from "./Content";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Counter render");
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleClick}>+</button>
      <Content count={count} />
    </div>
  );
}
