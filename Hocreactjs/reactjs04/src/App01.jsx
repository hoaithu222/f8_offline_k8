import { useEffect } from "react";
// import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/middlewares/todoMiddleware";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  if (status === "error") {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      {/* <Counter /> */}
      <h2>Todo List</h2>
      {status === "pending" ? (
        <h2>Loadding...</h2>
      ) : (
        todoList.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>;
        })
      )}
    </div>
  );
}
