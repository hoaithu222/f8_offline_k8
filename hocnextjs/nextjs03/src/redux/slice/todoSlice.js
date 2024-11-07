import { createSlice } from "@reduxjs/toolkit";

import { fetchTodos } from "../middleware/todoMiddleware";
import build from "next/dist/build";
const initialState = {
    count: 0,
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{

    },
    extraReducers:(build)=>{
        build.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.todoList = action.payload;
        })
    }
    


})