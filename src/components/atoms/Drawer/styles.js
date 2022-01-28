import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    /* position: relative; */
    top: 68px;
    right: 15px;
    width: ${(props) => props.$drawerWidth || 'calc(100% - 15px)'};
    z-index: ${(props) => props.$drawerZindex || 'auto'};
  }
`;

// TODO To set Z-index (now doesn't work)
