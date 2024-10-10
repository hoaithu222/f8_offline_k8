import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getDetailsProduct = createAsyncThunk(
    "getDetailsProduct",
    async ({ id }, { rejectWithValue }) => {
        try {
            const Api_url = import.meta.env.VITE_URL_API;
            if (!Api_url) {
                throw new Error('API URL is not defined');
            }

            const response = await fetch(`${Api_url}/${id}`);
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
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

