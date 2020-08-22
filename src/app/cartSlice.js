import {
    createSlice
} from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0,
    },
    reducers: {
        getTotal: state => state.total
    }
})

export const {
    getItems,
    getTotal
} = cartSlice.actions
export const cartState = state => state.cart
export default cartSlice.reducer;