import { useState } from "react";
import Button from "../Button/Button";
import "./TodoItem.css";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoText, setNewTodoText] = useState(todo.todo);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setNewTodoText(todo.todo);
    setIsCompleted(todo.isCompleted);
  };

  const handleUpdate = () => {
    if (newTodoText !== todo.todo || isCompleted !== todo.isCompleted) {
      onUpdate(todo._id, { todo: newTodoText, isCompleted });
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todo._id);
  };

  const handleCompletedChange = (e) => {
    setIsCompleted(e.target.checked);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          />
          <div className="box">
            <div className="completed">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCompletedChange}
                id={`check-${todo._id}`}
              />
              <label htmlFor={`check-${todo._id}`}>
                {isCompleted ? "Completed" : "Not Completed"}
              </label>
            </div>
            <div className="list_btn">
              <Button onClick={handleUpdate} className="btn_update">
                Cập nhật
              </Button>
              <Button onClick={handleEditToggle} className="btn_cancel">
                Hủy
              </Button>
              <Button onClick={handleDelete} className="btn_delete">
                Xóa
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={todo.todo}
            readOnly
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          />
          <div className="actions">
            <Button onClick={handleEditToggle} className="btn_edit">
              Sửa
            </Button>
            <Button onClick={handleDelete} className="btn_delete">
              Xóa
            </Button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
