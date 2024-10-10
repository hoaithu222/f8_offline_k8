export const middleware = (store) => {
    return (action) => {
        // console.log('Store', store);
        // console.log('Action', action);
        // if (action.type === "todo/add") {
        //     store.dispatch({
        //         type: "counter/increment",
        //     })
        // }
        if (typeof action === "function") {
            return action(store.dispatch, store.getState);
        }
        store.dispatch(action);
    }
}

// Bất kì dispatch nào cũng đều chạy qua hàm này
// xử lý trước khi gửi lên reducer

