import {
    createSlice
} from '@reduxjs/toolkit';


export const productsSlice = createSlice({
    name: "products",
    initialState: {
        productDetail: {},
        products: [],

    },
    reducers: {
        getProductDetail: (state, action) => {
            state.productDetail = state.products.find(item => item.id === action.payload)
        },
        getProducts: (state, action) => {
            state.products = action.payload
        },
        updateProducts: (state, action) => {
            const foundIdx = state.products.findIndex(item => item.id === action.payload.id)
            console.log('foundIdx', foundIdx)
            // const copy = [...state.products.splice(foundIdx, 1 , action.payload)]
            state.products.splice(foundIdx, 1 , action.payload)
            // console.log('splice :>>', state.products.splice(foundIdx, 1 , action.payload))
            // console.log('copy', copy)
            // console.log('action.payload', action.payload)
            state.products = state.products
        }
    }
})

export const {
    getProducts,
    getProductDetail,
    updateProducts,
} = productsSlice.actions
export const productsState = state => state.products
export default productsSlice.reducer;