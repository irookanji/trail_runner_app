/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    saveProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const { saveProducts } = productsSlice.actions;
