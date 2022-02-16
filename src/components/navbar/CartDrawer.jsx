import * as React from 'react';
import { StyledCart, StyledList, StyledNavbar, StyledCloseButton } from './cartDrawerStyles';
import { Box, Typography, Badge } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartContent from './CartContent';

export default function CartDrawer({ products, total, onCheckoutClicked, open, setOpen }) {
  return (
    <>
      <React.Fragment key="right">
        <StyledCart anchor="right" open={open} onClose={() => setOpen(false)}>
          <StyledNavbar>
            <StyledCloseButton onClick={() => setOpen(false)}>
              <CloseIcon sx={{ fontSize: '50px', fontWeight: 'bold', color: 'gray' }} />
            </StyledCloseButton>
            <Box sx={{ mt: '0.5rem', position: 'absolute', top: '1%', left: '32%' }}>
              <Badge badgeContent={5} color="secondary">
                <ShoppingCartOutlinedIcon sx={{ fontSize: '35px', color: 'gray' }} />
              </Badge>
              <Typography sx={{ fontSize: '12px' }}>You're €50 away from free shipping!</Typography>
            </Box>
          </StyledNavbar>

          <StyledList>
            <CartContent />
            <Typography>Subtotal: {total}</Typography>
            <Typography>Shipping FREE</Typography>
          </StyledList>
        </StyledCart>
      </React.Fragment>
    </>
  );
}
