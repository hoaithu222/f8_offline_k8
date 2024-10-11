import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productReducer";
import { cartReducer } from "./slices/cartReducer";
import { detailsProduct } from "./slices/detailsProduct";

export const store = configureStore({
    reducer: {
        product: productReducer.reducer,
        cart: cartReducer.reducer,
        detailsProduct: detailsProduct.reducer
    }
})