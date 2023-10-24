import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: initState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    }
})


export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer