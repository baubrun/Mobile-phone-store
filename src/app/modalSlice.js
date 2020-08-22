import {
    createSlice
} from '@reduxjs/toolkit';



export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleModal: (state) =>
            state.isOpen = !state.isOpen
    }
})

export const {
    toggleModal
} = modalSlice.actions
export const modalState = state => state.product
export default modalSlice.reducer;