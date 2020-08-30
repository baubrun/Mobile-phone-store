import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subTotal: 0,
    tax: 0,
    total: 0,
    isModalOpen: true,
    modalProduct: {},
    quantity: 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    clearCart: (state) => {
      state.items = [];
    },
    getCart: (state) => state.items,
    getSubTotal: (state) => {
      let { subTotal, quantity } = state.items.reduce(
        (cartSubTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemSubTotal = price * quantity;
          cartSubTotal.quantity += quantity;
          cartSubTotal.subTotal += itemSubTotal;
          return cartSubTotal;
        },
        {
          subTotal: 0,
          quantity: 0,
        }
      );
      subTotal = parseFloat(subTotal.toFixed(2));
      state.subTotal = subTotal;
      state.quantity = quantity;
    },
    getTotal: (state) => state.total,
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    toggleCartItemQty: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      });
    },
  },
});

export const {
  addCartItem,
  clearCart,
  getSubTotal,
  getTotal,
  getCart,
  removeCartItem,
  toggleCartItemQty,
} = cartSlice.actions;

export const cartState = (state) => state.cart;
export default cartSlice.reducer;
