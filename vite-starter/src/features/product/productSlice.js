import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project'

export const getProducts = createAsyncThunk('product/getProducts', async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data;

    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    products: [],
    isLoading: false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        [getProducts.rejected]: (state) => {
            state.isLoading = false
        }
    }

})

export default productSlice.reducer