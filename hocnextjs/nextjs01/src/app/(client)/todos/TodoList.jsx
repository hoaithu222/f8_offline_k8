const getTodoList = async () => {
  const response = await fetch(`${process.env.API_SERVER}/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todo-list"],
      // revalidate: 2000,//tự động revalidate sau 1 khoảng thời gian đã thiết lập
    },
  });
  return response.json();
};
export default async function TodoList() {
  const todoList = await getTodoList();
  return (
    <div>
      {todoList.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
}
