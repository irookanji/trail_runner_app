import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';

export const StyledCart = styled(Drawer)`
  z-index: 2000;
  .MuiPaper-root {
    /* top: 68px; */
    right: 15px;
    /* width: ${(props) => props.$drawerWidth || 'calc(100% - 15px)'}; */
    /* z-index: 1500px; */
  }
`;
