import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    status: "idle",
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todoList = action.payload;
            state.status = "idle";
        });
        builder.addCase(getTodos.rejected, (state) => {
            state.status = "errors";
        })
    }

});

// tiền tố getTodos phân biệt các trạng thái tên tiền tố trùng với tên hàm
export const getTodos = createAsyncThunk("getTodos", async (_, { rejectWithValue }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        //rejectWithValue lấy lỗi mà rejected không được
        return rejectWithValue("Error");
    }
    return response.json();
});

// State : có 3 trạng thái -pending - fulfilled - rejected