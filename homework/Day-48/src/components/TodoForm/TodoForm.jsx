import React, { useState, useEffect, useCallback, useRef } from "react";
import Button from "../Button/Button";
import { notifySuccess, notifyWarning } from "../../utils/notifications";
import "./TodoForm.css";

const TodoForm = ({ onAdd, onSearch }) => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const isInitialMount = useRef(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 300);

    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (debouncedText !== text) {
        onSearch(debouncedText);
        if (debouncedText.trim()) {
          notifySuccess("Kích hoạt chế độ tìm kiếm thành công");
        } else {
          notifySuccess("Kích hoạt chế độ tìm kiếm thành công");
        }
      }
    }
  }, [debouncedText, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      notifyWarning("Todo cần có trên 1 kí tự");
      return;
    }
    onAdd({ text, completed: false });
    setText("");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(text);
    if (text.trim()) {
      notifySuccess("Kích hoạt chế độ tìm kiếm thành công");
    } else {
      notifySuccess("Kích hoạt chế độ tìm kiếm thành công");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Thêm một việc làm mới hoặc tìm kiếm"
      />
      <Button type="submit" className="btn_add">
        Thêm mới
      </Button>
      <Button type="button" className="btn_find" onClick={handleSearch}>
        Tìm Kiếm
      </Button>
    </form>
  );
};

export default TodoForm;
