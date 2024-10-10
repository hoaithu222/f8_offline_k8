import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            // action Object 
            // {type: "counter/increment"}
            state.count += action.payload;
        },
        decrement: (state, action) => {
            // action Object 
            // {type: "counter/decrement"}
            state.count -= action.payload;
        },
    }

})
export const { increment, decrement } = counterSlice.actions;