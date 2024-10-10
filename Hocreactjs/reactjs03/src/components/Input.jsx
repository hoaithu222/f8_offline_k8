import React, { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focus: () => inputRef.current.focus(),
      get value() {
        return inputRef.current.value;
      },
      set value(value) {
        inputRef.current.value = value;
      },
    };
  });
  return (
    <div>
      <input type="text" placeholder="Nhập tên...." ref={ref} />
    </div>
  );
}

export default forwardRef(Input);
