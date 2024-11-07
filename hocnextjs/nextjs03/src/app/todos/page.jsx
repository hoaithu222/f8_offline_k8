"use client"

export default function TodosPage() {
    const todo = useSelector((state)=>state.todo.todoList);

  return (
    <div>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
  )
}
