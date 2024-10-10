import { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
export default function App() {
  const [counter, setCounter] = useState(0);
  const myRef = useRef(0);
  const inputRef = useRef();
  //console.log(myRef);
  const handleClick = () => {
    setCounter(counter + 1);
    // myRef.current++;
    console.log(myRef.current);
  };
  const ButtonRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
    console.log(ButtonRef);
  }, []);
  return (
    <div>
      <h1
        ref={(el) => {
          console.log(el);
        }}
      >
        Counter :{counter}
      </h1>
      <button onClick={handleClick}>Click me</button>
      <div>
        <input type="text" placeholder="Vui lòng nhâp..." ref={inputRef} />
        <Button ref={ButtonRef} />
      </div>
    </div>
  );
}
