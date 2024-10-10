import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";
// const init = [
//   {
//     id: 1,
//     content: "Item 1",
//   },
//   {
//     id: 2,
//     content: "Item 2",
//   },
//   {
//     id: 3,
//     content: "Item 3",
//   },
//   {
//     id: 4,
//     content: "Item 4",
//   },
// ];
// const reducer = (state, acction) => {
//   console.log(state, acction);
//   if(acction.type === "ADD"){
//     return{
//         ...state,
//         {
//             id:init.length,
//             content:acction.content,
//         },

//     }
//   }
// };
export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");
  console.log(initialState.todoList.length);
  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      return alert("Vui lòng nhập");
    }
    dispatch({
      type: "todo/add",
      payload: todo,
    });
  };
  const handleDelete = (id) => {
    if (window.confirm("bạn chắc chưa")) {
      dispatch({
        type: "todo/delete",
        payload: id,
      });
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Nhập todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Thêm</button>
      </form>
      <ul>
        {state.todoList.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            {item.content}
            <button
              onChange={(id) => {
                handleDelete(id);
              }}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
