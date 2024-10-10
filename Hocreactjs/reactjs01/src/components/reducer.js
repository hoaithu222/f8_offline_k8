

export const reducer = (state, action) => {
    switch (action.type) {
        case "todo/add": {
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.todoList.length,
                        content: action.payload,

                    }
                ]
            }
        }
        case "todo/delete": {
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload),
            }
        }
        default:
            return state;
    }
}
export const initialState = {
    todoList: [
        {
            id: 1,
            content: "Item 1",
        },
        {
            id: 2,
            content: "Item 2",
        },
        {
            id: 3,
            content: "Item 3",
        },
        {
            id: 4,
            content: "Item 4",
        },
    ]
}