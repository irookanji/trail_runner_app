import * as React from 'react';
import { StyledNewArrivalsDrawer, StyledButton } from './styles';
import NewArrivalsContent from './NewArrivalsContent';

export default function NewArrivalsDrawer(props) {
  const [topDrawer, setTopDrawer] = React.useState(false);

  return (
    <>
      <React.Fragment key="top">
        <StyledButton onClick={() => setTopDrawer(!topDrawer)}>{props.children}</StyledButton>
        <StyledNewArrivalsDrawer anchor="top" open={topDrawer} onClose={() => setTopDrawer(false)}>
          <NewArrivalsContent />
        </StyledNewArrivalsDrawer>
      </React.Fragment>
    </>
  );
}
