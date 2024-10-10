import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const initialState = {
    listProduct: [],
    totalProducts: 0,
    loading: false,
    error: null,
};


export const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.listProduct = action.payload.data.listProduct;
                state.totalProducts = action.payload.data.totalPage;
                state.loading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});
console.log('API URL:', import.meta.env.VITE_URL_API);
export const getProducts = createAsyncThunk(
    "getProducts",
    async ({ limit, page }, { rejectWithValue }) => {
        try {
            const Api_url = import.meta.env.VITE_URL_API;
            const response = await fetch(`${Api_url}?limit=${limit}&page=${page}`);


            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }


            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const text = await response.text();
                throw new Error(`Expected JSON, but received: ${text}`);
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);