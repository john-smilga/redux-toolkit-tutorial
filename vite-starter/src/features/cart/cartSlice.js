import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            state.amount = 0
            state.total = 0
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
            state.amount = state.cartItems.reduce((total, item) => total + item.amount, 0)
            state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
        },
        addItem: {
            reducer: (state, action) => {
                const itemId = action.payload.id
                if (!state.cartItems.includes(item => item.id === itemId)) {
                    //not in the cart
                    state.cartItems.push(action.payload)
                }
                else {
                    //already in the cart
                    const item = state.cartItems.find(item => item.id === itemId)
                    item.amount += action.payload.amount
                }
                state.amount = state.cartItems.reduce((total, item) => total + item.amount, 0)
                state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
            },
            prepare: (item) => {
                return {
                    payload: {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        img: item.img,
                        amount: item.amount
                    }
                }
            }
        },

        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount += 1
            state.amount += 1
            state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            if (cartItem.amount > 1) {
                cartItem.amount -= 1
                state.amount -= 1
                state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
            }
        }
    }
})

export const { clearCart, removeItem, addItem, increase, decrease } = cartSlice.actions

export default cartSlice.reducer