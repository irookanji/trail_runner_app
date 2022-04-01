/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { StyledNewArrivalsDrawer, StyledButton } from './styles';
import NewArrivalsContent from './NewArrivalsContent';

type Props = {
  children: string;
}

export default function NewArrivalsDrawer({ children }: Props) {
  const [topDrawer, setTopDrawer] = React.useState(false);

  return (
    <React.Fragment key="top">
      <StyledButton onClick={() => setTopDrawer(!topDrawer)}>{children}</StyledButton>
      <StyledNewArrivalsDrawer anchor="top" open={topDrawer} onClose={() => setTopDrawer(false)}>
        <NewArrivalsContent />
      </StyledNewArrivalsDrawer>
    </React.Fragment>
  );
}
