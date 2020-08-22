import {
    createSlice
} from '@reduxjs/toolkit';
import {data} from "../data"

export const productDetailSlice = createSlice({
    name: "productDetail",
    initialState: {
        product: {},
    },
    reducers: {
        getProductDetail: (state, action) => 
        state.product = data.find(item =>  item.id === action.payload.id)
    }
})

export const {
    getProductDetail
} = productDetailSlice.actions
export const productDetailState = state => state.product
export default productDetailSlice.reducer;