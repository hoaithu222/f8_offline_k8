const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchTodos = createAsyncThunk('fetchTodos',async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data =response.json();
    return data;
})