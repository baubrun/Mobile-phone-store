import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [{
        id: 1,
        title: "Google Pixel - Black",
        img: "product-1.png",
        price: 100,
        company: "GOOGLE",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        count: 1,
    },
    {
        id: 2,
        title: "Samsung S7",
        img: "product-2.png",
        price: 160,
        company: "SAMSUNG",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        count: 1,
    },],
    subtotal: 0,
    tax: 0,
    total: 0,
    isModalOpen: true,
    modalProduct: {},
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
      let { total, amount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemsTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemsTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.subtotal = total;
      state.amount = amount;
    },
    getTotal: (state) => state.total,
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalProduct = state.products.find(
        (item) => item.id === action.payload
      );
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    toggleCartItemCount: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return {
              ...item,
              amount: item.amount + 1,
            };
          } else {
            return {
              ...item,
              amount: item.amount - 1,
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
  getTotal,
  getCart,
  getSubTotal,
  closeModal,
  openModal,
  toggleCartItemCount,
  removeCartItem,
} = cartSlice.actions;

export const cartState = (state) => state.cart;
export default cartSlice.reducer;
