const initialState = {
    todoList: [],
    status: "pending",
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todo/update": {
            return {
                ...state, todoList: action.payload,
            }
        }
        case "todo/updateStatus": {
            return { ...state, status: action.payload }
        }
        default: {
            return state
        }

    }
}