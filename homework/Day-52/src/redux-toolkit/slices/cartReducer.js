import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    cartProduct: JSON.parse(localStorage.getItem("cartProduct")) || [],
    quantity:
        JSON.parse(localStorage.getItem("cartProduct"))?.reduce(
            (total, product) => total + product.quantityNew,
            0
        ) || 0,
};

export const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingProduct = state.cartProduct.find(
                (product) => product._id === action.payload._id
            );

            if (existingProduct) {
                if (existingProduct.quantityProduct > 0) {
                    existingProduct.quantityNew += 1;
                    existingProduct.quantityProduct -= 1;
                }
            } else {
                const newProduct = {
                    _id: action.payload._id,
                    name: action.payload.name,
                    brand: action.payload.brand,
                    price: action.payload.price,
                    image: action.payload.image,
                    quantityProduct: action.payload.quantity,
                    quantityNew: 1,
                };
                state.cartProduct.push(newProduct);
            }

            localStorage.setItem("cartProduct", JSON.stringify(state.cartProduct));

            state.quantity = state.cartProduct.reduce(
                (total, product) => total + product.quantityNew,
                0
            );
        },
        remove: (state, action) => {
            const existingProduct = state.cartProduct.find(
                (product) => product._id === action.payload._id
            );

            if (existingProduct) {
                existingProduct.quantityProduct += existingProduct.quantityNew;
                state.cartProduct = state.cartProduct.filter(
                    (item) => item._id !== action.payload._id
                );
            }

            localStorage.setItem("cartProduct", JSON.stringify(state.cartProduct));

            state.quantity = state.cartProduct.reduce(
                (total, product) => total + product.quantityNew,
                0
            );
        },
        clearCart: (state) => {
            state.cartProduct = [];
            state.quantity = 0;
            localStorage.removeItem("cartProduct");
        },
        decrease: (state, action) => {
            const existingProduct = state.cartProduct.find(
                (product) => product._id === action.payload._id
            );

            if (existingProduct) {
                if (existingProduct.quantityNew > 1) {
                    existingProduct.quantityNew -= 1;
                    existingProduct.quantityProduct += 1;
                } else {

                    existingProduct.quantityProduct += 1;
                    state.cartProduct = state.cartProduct.filter(
                        (item) => item._id !== action.payload._id
                    );
                }
            }

            localStorage.setItem("cartProduct", JSON.stringify(state.cartProduct));

            state.quantity = state.cartProduct.reduce(
                (total, product) => total + product.quantityNew,
                0
            );
        },
    },

});

export const { add, remove, clearCart, decrease } = cartReducer.actions;
export default cartReducer.reducer;
