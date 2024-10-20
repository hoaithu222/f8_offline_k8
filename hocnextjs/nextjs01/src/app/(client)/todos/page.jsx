import TodoAdd from "./todoAdd";
import TodoList from "./TodoList";

export default function TodoPage() {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
