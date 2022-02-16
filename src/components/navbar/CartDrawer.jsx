import * as React from 'react';
import { StyledCart, StyledList, StyledNavbar, StyledCloseButton } from './cartDrawerStyles';
import { ListItem, ListItemIcon, ListItemText, Box, Typography, Badge } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Icon } from '@iconify/react';

const cartDrawerData = ['Cart1', 'Cart2'];

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
            <Typography>Total: {total}</Typography>
            {/* {cartDrawerData.map((text, index) => (
              <ListItem button key={text} onClick={() => props.setOpen(false)}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <Icon icon="mdi:shoe-sneaker" width="30" height="30" />
                  ) : (
                    <Icon icon="mdi:shoe-cleat" width="30" height="30" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
          </StyledList>
        </StyledCart>
      </React.Fragment>
    </>
  );
}
