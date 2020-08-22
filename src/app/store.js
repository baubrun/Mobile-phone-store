import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    modalOpen: modalReducer,
  },
});


