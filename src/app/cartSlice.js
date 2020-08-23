import {
    createSlice
} from '@reduxjs/toolkit';
import deepcopy from 'deepcopy'

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
        getSubTotal: (state) => {
            // let tempItems = [...state.items]
            // const idx = tempItems.findIndex(i => i.id === action.payload.id)
            // console.log('idx', idx)
            // console.log('action.payload', action.payload)
            // const item = tempItems[idx]
            // console.log('item', item)
            // item.count += 1
            // const price = item.price * item.count
            // item.total = price
            // state.items = [...tempItems]
            state.SubTotal = state.SubTotal
        },
        getTotal: state => state.total,
        addCartItem: (state, action) => {
            state.items = [
                ...state.items, action.payload, 
            ]
            let tempItems = deepcopy([...state.items])
            console.log('tempItems', tempItems)
            let idx = tempItems.findIndex(i => i.id === action.payload.id)
            console.log('idx', idx)
            console.log('action.payload', action.payload)
            let item = tempItems[idx]
            item.count = 1
            let price = item.price * item.count
            item.total = price
            state.items = [...tempItems]
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