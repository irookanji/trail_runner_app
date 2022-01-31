import styled from 'styled-components';
import { Drawer, List, Button } from '@mui/material';

export const StyledNewArrivalsDrawer = styled(Drawer)`
  .MuiPaper-root {
    /* position: relative; */
    top: 68px;
    right: 15px;
    width: ${(props) => props.$drawerWidth || 'calc(100% - 15px)'};
    z-index: ${(props) => props.$drawerZindex || 'auto'};
  }
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: block;
  margin: 2 0;
  color: #212a2f;
`;
