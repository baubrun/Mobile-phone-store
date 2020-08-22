import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";
import productDetailReducer from "./productDetailSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    productDetail: productDetailReducer,
    modalOpen: modalReducer
  },
});


