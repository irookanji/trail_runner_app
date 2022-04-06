/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';

type cartType = {
  id: number;
  quantity: number,
  title: string,
  info: string,
  price: number,
  image: string,
  size: string,
  color: string,
  discount: number,
  inventory: number,
}

type initialStateType = {
cart: {
  items: cartType[],
  total?: number,
}
};

const initialState: initialStateType = {
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
      const item: any = state.cart.items.find((product) => product.id === payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, { payload }) => {
      const item: any = state.cart.items.find((product) => product.id === payload.id);
      item.quantity--;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart, deleteFromCart, incrementQuantity, decrementQuantity,
} = cartSlice.actions;
