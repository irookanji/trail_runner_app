import * as React from 'react';
import { StyledCart, StyledList, StyledButton } from './cartDrawerStyles';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { Icon } from '@iconify/react';

const cartDrawerData = ['Cart1', 'Cart2'];

export default function CartDrawer(props) {
  const [rightDrawer, setRightDrawer] = React.useState(false);

  return (
    <>
      <React.Fragment key="right">
        <StyledButton onClick={() => setRightDrawer(!rightDrawer)}>{props.children}</StyledButton>
        <StyledCart anchor="right" open={rightDrawer} onClose={() => setRightDrawer(false)}>
          <StyledList>
            {cartDrawerData.map((text, index) => (
              <ListItem button key={text} onClick={() => setRightDrawer(false)}>
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
