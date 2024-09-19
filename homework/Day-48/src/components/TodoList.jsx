import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ todos, onDelete, onUpdate }) => {
  console.log("Dữ liệu todos nhận được:", todos);
  if (!Array.isArray(todos)) {
    console.error("Dữ liệu todos không hợp lệ: Không phải là mảng");
    return <p>Không có công việc nào để hiển thị</p>;
  }
  const validTodos = todos.filter((todo) => todo && todo._id);
  if (validTodos.length === 0) {
    return <p>Không có công việc nào để hiển thị</p>;
  }

  return (
    <ul>
      {validTodos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
