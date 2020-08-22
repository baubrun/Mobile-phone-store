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
        getCart: state => state.items,
        getSubTotal: state => state.SubTotal,
        getTotal: state => state.total,
        addCartItem: (state, action) => {
            state.items = [
                ...state.items, action.payload, 
            ]
        }
    }
})

export const {
    addCartItem,
    getTotal,
    getCart,
    getSubTotal,
} = cartSlice.actions
export const cartState = state => state.cart
export default cartSlice.reducer;