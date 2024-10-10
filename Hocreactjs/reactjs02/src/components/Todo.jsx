import React, { useState } from "react";
import { useDispatch, useSelector } from "../store/hook";

export default function Todo() {
  const [title, setTitle] = useState("");
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleChangeValue = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "todo/add",
      payload: title,
    });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Nhập todo"
          value={title}
          onChange={handleChangeValue}
        />
        <button>Add</button>
      </form>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
