import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems.js";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    amount: 4,
    total: 4,
    isLoading: true,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItems: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

console.log(cartSlice);
export const { clearCart, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
