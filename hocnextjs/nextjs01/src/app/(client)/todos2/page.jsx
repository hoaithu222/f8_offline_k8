import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

export default function TodosPage() {
  return (
    <div>
      <h1>Todo list</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
