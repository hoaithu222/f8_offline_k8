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
        const Api_url = process.env.URL_API;
        const response = await fetch(`${Api_url}/${id}`);
        return response.json();
    }
);