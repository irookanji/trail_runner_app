/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import {
  Box, Typography, Badge, Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';
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
  QuantitySelector,
  Quantity,
  Steper,
  PriceContainer,
} from './cartDrawerStyles';
import { deleteFromCart, incrementQuantity, decrementQuantity } from '../../redux/cartReducer';
import CartContent from './CartContent';
import Recomended from '../../assets/Recomended.png';

type Props = {
  open?: any;
  setOpen?: any;
}

export default function CartDrawer({ open, setOpen }: Props) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cartState.cart);
  const cartItems = cart.items;
  const total = cartItems.reduce((totalPrice: number, product: {
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
  }) => totalPrice + (product.price - product.discount) * product.quantity, 0);
  return (
    <React.Fragment key="right">
      <StyledCart anchor="right" open={open} onClose={() => setOpen(false)}>
        <StyledNavbar>
          <StyledCloseButton onClick={() => setOpen(false)}>
            <CloseIcon sx={{ fontSize: '50px', fontWeight: 'bold', color: 'gray' }} />
          </StyledCloseButton>
          <Box sx={{
            mt: '0.5rem', position: 'absolute', top: '1%', left: '32%',
          }}
          >
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartOutlinedIcon sx={{ fontSize: '35px', color: 'gray' }} />
            </Badge>
            <Typography sx={{ fontSize: '12px' }}>
              {total >= 200
                ? 'Congrats! You get free standard shipping.'
                : `You're ${200 - total} away from free shipping!`}
            </Typography>
          </Box>
        </StyledNavbar>

        <StyledList>
          {cartItems.length !== 0 ? (
            <>
              <ProductContainer>
                {cartItems.map((item: {
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
                  }) => (
                    <Box key={Math.floor(Math.random() * 100) + 1}>
                      <CartItem key={item.id}>
                        <img alt="item.title" src={item.image} />
                        <DetailesContainer>
                          <Typography>{item.title}</Typography>
                          <Typography>{item.color}</Typography>
                          <Typography>
                            Size:
                            {item.size}
                          </Typography>
                          <QuantitySelector>
                            <Steper
                              disabled={item.quantity === 0}
                              variant="text"
                              onClick={() => {
                                dispatch(decrementQuantity(item));
                              }}
                            >
                              {' '}
                              &#8211;
                            </Steper>
                            <Quantity>{item.quantity}</Quantity>
                            <Steper
                              disabled={item.quantity === item.inventory}
                              onClick={() => {
                                dispatch(incrementQuantity(item));
                              }}
                            >
                              +
                            </Steper>
                          </QuantitySelector>
                          {item.quantity === item.inventory && (
                            <Alert sx={{ width: '100%', marginTop: '10px' }} severity="info">
                              Sorry, that's all that we have.
                            </Alert>
                          )}
                        </DetailesContainer>
                        <PriceContainer>
                          <MiniCloseButton>
                            <CloseIcon
                              onClick={() => {
                                dispatch(deleteFromCart(item.id));
                              }}
                            />
                          </MiniCloseButton>
                          <DetailesPrice component="div">
                            {item.discount >= 1 ? (
                              <Box display="inline">
                                &euro;
                                {item.price - item.discount}
                                <Box sx={{ textDecoration: 'line-through', color: '#d3d4d5' }}>
                                  &euro;
                                  {item.price}
                                </Box>
                              </Box>
                            ) : (
                              <Box>
                                &euro;
                                {item.price}
                              </Box>
                            )}
                          </DetailesPrice>
                        </PriceContainer>
                      </CartItem>
                      {cartItems.length >= 2 ? <StyledDivider /> : null}
                    </Box>
                ))}
              </ProductContainer>
              <BottomContainer>
                <StyledDivider />
                <Subtotal>
                  <BottomTitle>Subtotal</BottomTitle>
                  <Typography component="div">
                    &euro;
                    {total}
                    ,00 EUR INCL. VAT
                  </Typography>
                </Subtotal>
                <Shipping>
                  <BottomTitle>Shipping</BottomTitle>
                  <Typography>{total >= 200 ? 'FREE' : '€15'}</Typography>
                </Shipping>
                <BottomBtn>Proceed to checkout</BottomBtn>
                <SenaryHeader>You might also like</SenaryHeader>
                <BottomImg src={Recomended} alt="bottom-img" />
              </BottomContainer>
            </>
          ) : (
            <CartContent />
          )}
        </StyledList>
      </StyledCart>
    </React.Fragment>
  );
}
