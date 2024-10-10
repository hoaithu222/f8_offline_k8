import { useRef, useEffect, useState } from "react";

export default function Checkbox() {
  const checkboxItem = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4"];
  const checkAllRef = useRef();
  const checkItemRef = useRef([]);
  const [count, setCount] = useState(0);

  const handleChangeCheckAll = (e) => {
    const status = e.target.checked;
    checkItemRef.current.forEach((el) => {
      el.checked = status;
    });
    setCount(status ? checkboxItem.length : 0);
  };

  const handleChangeItem = (e) => {
    const status = e.target.checked;
    setCount((prevCount) => {
      return status ? prevCount + 1 : prevCount - 1;
    });
  };
  useEffect(() => {
    checkAllRef.current.checked = count === checkboxItem.length;
  }, [count, checkboxItem.length]);
  console.log(checkItemRef);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="checkAll"
          ref={checkAllRef}
          onChange={handleChangeCheckAll}
        />
        Check All
      </label>
      <hr />
      {checkboxItem.map((item, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            type="checkbox"
            ref={(el) => (checkItemRef.current[index] = el)}
            onChange={handleChangeItem}
          />
          {item}
        </label>
      ))}
      <hr />
      <button>Xóa đã chọn (0)</button>
    </div>
  );
}
