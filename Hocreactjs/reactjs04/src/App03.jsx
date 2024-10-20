import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux-toolkit/slices/TodoSlice";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  if (status === "pending") {
    return <h2>Loading....</h2>;
  }
  if (status === "errors") {
    return <h3>Đã có lỗi xảy ra </h3>;
  }
  return (
    <div>
      {todoList.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
}
