import React from 'react';
import {
  CartContentContainer, TitleEmptyCart, ButtonsEmptyCart, StyledLink,
} from './cartDrawerStyles';

function CartContent() {
  return (
    <CartContentContainer>
      <TitleEmptyCart>Your Cart is Empty</TitleEmptyCart>
      <StyledLink to="/men">
        <ButtonsEmptyCart>Shop men&apos;s</ButtonsEmptyCart>
      </StyledLink>
      <StyledLink to="/women">
        <ButtonsEmptyCart>Shop women&apos;s</ButtonsEmptyCart>
      </StyledLink>
      <ButtonsEmptyCart>Shop socks</ButtonsEmptyCart>
      <ButtonsEmptyCart>Shop laces</ButtonsEmptyCart>
    </CartContentContainer>
  );
}

export default CartContent;
