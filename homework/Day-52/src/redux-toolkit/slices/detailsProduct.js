import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const initialState = {
    detailsProduct: {},
    loading: false,
    error: null,
};

export const detailsProduct = createSlice({
    name: "detailsProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDetailsProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDetailsProduct.fulfilled, (state, action) => {
                state.detailsProduct = action.payload.data;
                state.loading = false;
            })
            .addCase(getDetailsProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const getDetailsProduct = createAsyncThunk(
    "getDetailsProduct",
    async ({ id }) => {
        const response = await fetch(`https://api-exercise-sopi.vercel.app/api/v1/products/${id}`);
        return response.json();
    }
);