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
      state.cart = {
        ...state.cart,
        ...action.payload,
      };
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
