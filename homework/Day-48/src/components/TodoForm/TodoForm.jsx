import { useState } from "react";
import Button from "../Button/Button";
import { notifySuccess, notifyWarning } from "../../utils/notifications";
import "./TodoForm.css";

const TodoForm = ({ onAdd, onSearch }) => {
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
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(text);
    notifySuccess("Kích hoạt chế độ tìm kiếm thành công");
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
      <Button className="btn_find" onClick={handleSearch}>
        Tìm Kiếm
      </Button>
    </form>
  );
};

export default TodoForm;
