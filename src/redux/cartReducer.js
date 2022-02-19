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
    addToCart: (state, action) => {
      state.cart.items.push(action.payload);
      state.cart.total = state.cart.total + action.payload.price;
    },
    deleteFromCart: (state, action) => {
      state.cart = {
        total: state.cart.total - state.cart.items.find((item) => item.id === action.payload).price,
        items: state.cart.items.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
