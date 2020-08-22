import {
    createSlice
} from '@reduxjs/toolkit';


export const productsSlice = createSlice({
    name: "products",
    initialState: {
        values: {
            productDetail: {},
            products: [],

        }
    },
    reducers: {
        getProductDetail: (state, action) => {
            state.values.productDetail = state.products.find(item => item.id === action.payload)
        },
        getProducts: (state, action) => {
            state.values.products = action.payload
        }

    }
})

export const {
    getProducts,
    getProductDetail
} = productsSlice.actions
export const productsState = state => state.products.values
export default productsSlice.reducer;