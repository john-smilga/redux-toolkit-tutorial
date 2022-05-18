import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./featues/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
