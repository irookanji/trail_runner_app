import * as React from 'react';
import { StyledCart, StyledList, StyledNavbar, StyledCloseButton } from './cartDrawerStyles';
import { ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Icon } from '@iconify/react';

const cartDrawerData = ['Cart1', 'Cart2'];

export default function CartDrawer(props) {
  return (
    <>
      <React.Fragment key="right">
        <StyledCart anchor="right" open={props.open} onClose={() => props.setOpen(false)}>
          <StyledNavbar>
            <StyledCloseButton onClick={() => props.setOpen(false)}>
              <CloseIcon sx={{ fontSize: '50px', fontWeight: 'bold', color: 'gray' }} />
            </StyledCloseButton>
            <Box sx={{ mt: '0.5rem', position: 'absolute', top: '1%', left: '32%' }}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: '35px', color: 'gray' }} />
              <Box display="inline">1</Box>
              <Typography sx={{ fontSize: '12px' }}>You're €50 away from free shipping!</Typography>
            </Box>
          </StyledNavbar>

          <StyledList>
            {cartDrawerData.map((text, index) => (
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
            ))}
          </StyledList>
        </StyledCart>
      </React.Fragment>
    </>
  );
}
