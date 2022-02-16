import React from 'react';
import { CartContentContainer, TitleEmptyCart, ButtonsEmptyCart } from './cartDrawerStyles';

const CartContent = () => {
  return (
    <CartContentContainer>
      <TitleEmptyCart>Your Cart is Empty</TitleEmptyCart>
      <ButtonsEmptyCart>Shop men's</ButtonsEmptyCart>
      <ButtonsEmptyCart>Shop women's</ButtonsEmptyCart>
      <ButtonsEmptyCart>Shop socks</ButtonsEmptyCart>
      <ButtonsEmptyCart>Shop laces</ButtonsEmptyCart>
    </CartContentContainer>
  );
};

export default CartContent;
