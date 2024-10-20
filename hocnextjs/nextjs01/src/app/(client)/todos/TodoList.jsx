const getTodo = async () => {
  const response = await fetch(`${process.env.API_SERVER}/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todo-list"],
    },
  });
  return response.json();
};

export default async function TodoList() {
  const todos = await getTodo();

  return (
    <div>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
}
