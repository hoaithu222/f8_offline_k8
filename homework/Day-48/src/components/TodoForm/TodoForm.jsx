import { useState } from "react";
import Button from "../Button/Button";
import { notifyWarning } from "../../utils/notifications";
import "./TodoForm.css";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      notifyWarning("Todo cần có trên 1 kí tự");
      return;
    }
    onAdd({ text, completed: false });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Thêm một việc làm mới"
      />
      <Button type="submit" className="btn_add">
        Thêm mới
      </Button>
    </form>
  );
};

export default TodoForm;
