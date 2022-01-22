import * as React from 'react';
import Box from '@mui/material/Box';
import { StyledDrawer } from './styles';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Icon } from '@iconify/react';

export default function CustomDrawer(props) {
  const toggleDrawer = (anchor, open) => (event) => {
    props.setDrawer({ ...props.drawer, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {props.drawerData.map((text, index) => (
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

  return (
    <>
      <React.Fragment key={props.drawerPosition}>
        <Button onClick={toggleDrawer(props.drawerPosition, true)} sx={{ my: 2, color: '#212A2F', display: 'block' }}>
          {props.buttonContent}
        </Button>
        <StyledDrawer
          anchor={props.drawerPosition}
          open={props.drawer[props.drawerPosition]}
          onClose={toggleDrawer(props.drawerPosition, false)}
        >
          {list(props.drawerPosition)}
        </StyledDrawer>
      </React.Fragment>
    </>
  );
}
