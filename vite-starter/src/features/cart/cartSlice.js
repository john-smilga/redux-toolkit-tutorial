import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false
}


export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data;

    } catch (error) {
        console.log(error)
    }
})


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
        addItem: (state, action) => {
            const itemId = action.payload
            if (!state.cartItems.includes(item => item.id === itemId)) {
                state.cartItems.push(cartItems.find(item => item.id === itemId))
                state.amount = state.cartItems.reduce((total, item) => total + item.amount, 0)
                state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
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
            if (cartItem.amount >= 1) {
                cartItem.amount -= 1
                state.amount -= 1
                state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
            }
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const { clearCart, removeItem, addItem, increase, decrease } = cartSlice.actions

export default cartSlice.reducer