import * as React from 'react';
import Box from '@mui/material/Box';
import { StyledDrawer } from './cartDrawerStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';

const data = ['Cart1', 'Cart2'];

export default function CartDrawer(props) {
  const list = (drawerPosition) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(drawerPosition, false)}
      onKeyDown={props.toggleDrawer(drawerPosition, false)}
    >
      <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {data.map((text, index) => (
          <ListItem button key={text}>
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
      </List>
    </Box>
  );

  const drawerPosition = 'right';

  return (
    <>
      <StyledDrawer
        anchor={drawerPosition}
        open={props.drawer.right}
        onClose={props.toggleDrawer(drawerPosition, false)}
        $drawerWidth="25rem"
        $drawerZindex="1500"
      >
        {list(drawerPosition)}
      </StyledDrawer>
    </>
  );
}
