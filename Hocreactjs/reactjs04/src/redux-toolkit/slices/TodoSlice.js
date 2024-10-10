import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todoList = action.payload;
        });

    }

})

export const getTodos = createAsyncThunk("getTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
});

// State : có 3 trạng thái -pending - fulfilled - rejected