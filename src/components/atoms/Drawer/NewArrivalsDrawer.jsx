import * as React from 'react';
import { StyledNewArrivalsDrawer, StyledList, StyledButton } from './styles';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import NewArrivalsContent from './NewArrivalsContent';

import { Icon } from '@iconify/react';

const newArrivalsDrawerData = ['Rainy Days', 'Cold Weather', 'Warm Weather', 'Relaxing', 'Running'];

export default function NewArrivalsDrawer(props) {
  const [topDrawer, setTopDrawer] = React.useState(false);

  return (
    <>
      <React.Fragment key="top">
        <StyledButton onClick={() => setTopDrawer(!topDrawer)}>{props.children}</StyledButton>
        <StyledNewArrivalsDrawer anchor="top" open={topDrawer} onClose={() => setTopDrawer(false)}>
          {/* <StyledList>
            {newArrivalsDrawerData.map((text, index) => (
              <ListItem button key={text} onClick={() => setTopDrawer(false)}>
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
          </StyledList> */}

          <NewArrivalsContent />
        </StyledNewArrivalsDrawer>
      </React.Fragment>
    </>
  );
}
