import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import productSlice from "./features/product/productSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartReducer,
        modal: modalReducer
    },
})