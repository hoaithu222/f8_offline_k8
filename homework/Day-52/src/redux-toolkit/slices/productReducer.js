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
                state.error = action.error.message;
            });
    },
});

export const getProducts = createAsyncThunk(
    "getProducts",
    async ({ limit, page }) => {
        const response = await fetch(`https://api-exercise-sopi.vercel.app/api/v1/products?limit=${limit}&page=${page}`);
        return response.json();
    }
);