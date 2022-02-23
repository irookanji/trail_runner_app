import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    items: [],
    total: 0,
  },
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.cart.items.find((product) => product.id === payload.id);
      if (item) {
        item.quantity += payload.quantity;
      } else {
        state.cart.items.push(payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = {
        items: state.cart.items.filter((item) => item.id !== action.payload),
      };
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.cart.items.find((product) => product.id === payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, { payload }) => {
      const item = state.cart.items.find((product) => product.id === payload.id);
      item.quantity--;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
