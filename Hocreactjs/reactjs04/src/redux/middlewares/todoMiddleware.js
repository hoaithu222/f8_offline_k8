export const getTodos = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            if (!response.ok) {
                throw new Error("Error")
            }
            const data = await response.json();
            dispatch({
                type: "todo/update",
                payload: data,
            })
            dispatch({
                type: "todo/updateStatus",
                payload: "success",
            })

        } catch (error) {
            dispatch({
                type: "todo/updateStatus",
                payload: "error"
            })
        }
    }
};