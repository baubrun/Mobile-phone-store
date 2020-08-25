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
        resetProductDetail: state => {
            state.productDetail = state.productDetail
        },
        setProductDetail: (state, action) => {
            state.productDetail = state.products.find(item => item.id === action.payload)
        },
        getProducts: (state, action) => {
            state.products = action.payload
        },
}
})

export const {
    getProducts,
    setProductDetail,
    updateProducts,
    resetProductDetail,
} = productsSlice.actions
export const productsState = state => state.products
export default productsSlice.reducer;