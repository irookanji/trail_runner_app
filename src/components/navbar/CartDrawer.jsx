import * as React from 'react';
import {
  StyledCart,
  StyledList,
  StyledNavbar,
  StyledCloseButton,
  CartItem,
  DetailesContainer,
  DetailesPrice,
  BottomContainer,
  BottomBtn,
  ProductContainer,
  Subtotal,
  Shipping,
  BottomTitle,
  MiniCloseButton,
  StyledDivider,
  SenaryHeader,
  BottomImg,
} from './cartDrawerStyles';
import { Box, Typography, Badge } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../redux/cartReducer';
import CartContent from './CartContent';

export default function CartDrawer({ open, setOpen }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState.cart);
  const cartItems = cart.items;
  return (
    <>
      <React.Fragment key="right">
        <StyledCart anchor="right" open={open} onClose={() => setOpen(false)}>
          <StyledNavbar>
            <StyledCloseButton onClick={() => setOpen(false)}>
              <CloseIcon sx={{ fontSize: '50px', fontWeight: 'bold', color: 'gray' }} />
            </StyledCloseButton>
            <Box sx={{ mt: '0.5rem', position: 'absolute', top: '1%', left: '32%' }}>
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartOutlinedIcon sx={{ fontSize: '35px', color: 'gray' }} />
              </Badge>
              <Typography sx={{ fontSize: '12px' }}>
                {cart.total >= 50 ? 'Congrats! You get free standard shipping.' : 'Youre 50 away from free shipping!'}
              </Typography>
            </Box>
          </StyledNavbar>

          <StyledList>
            {cartItems.length !== 0 ? (
              <>
                <ProductContainer>
                  {cartItems.map((item) => (
                    <Box key={Math.floor(Math.random() * 100) + 1}>
                      <CartItem key={item.id}>
                        <img alt="item.title" src={item.image} />
                        <DetailesContainer>
                          <Typography>{item.title}</Typography>
                          <DetailesPrice>{item.price} &euro;</DetailesPrice>
                        </DetailesContainer>
                        <MiniCloseButton>
                          <CloseIcon
                            onClick={() => {
                              dispatch(deleteFromCart(item.id));
                            }}
                          />
                        </MiniCloseButton>
                      </CartItem>
                      <StyledDivider />
                    </Box>
                  ))}
                </ProductContainer>
                <BottomContainer>
                  <StyledDivider />
                  <Subtotal>
                    <BottomTitle>Subtotal</BottomTitle>
                    <Typography>&euro; {cart.total},00 EUR INCL. VAT</Typography>
                  </Subtotal>
                  <Shipping>
                    <BottomTitle>Shipping</BottomTitle>
                    <Typography>FREE</Typography>
                  </Shipping>
                  <BottomBtn>Proceed to checkout</BottomBtn>
                  <SenaryHeader>You might also like</SenaryHeader>
                  <BottomImg />
                </BottomContainer>
              </>
            ) : (
              <CartContent />
            )}
          </StyledList>
        </StyledCart>
      </React.Fragment>
    </>
  );
}
