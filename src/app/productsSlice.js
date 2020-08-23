import {
    createSlice
} from '@reduxjs/toolkit';


export const productsSlice = createSlice({
    name: "products",
    initialState: {
        // productDetail: {},
        productDetail: {
            id: 1,
            title: "Google Pixel - Black",
            img: "product-1.png",
            price: 100,
            company: "GOOGLE",
            info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
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