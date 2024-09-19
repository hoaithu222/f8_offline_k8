import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
  const [isShow, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!isShow)}>Toggle</button>
      {isShow && <Counter />}
    </div>
  );
}
