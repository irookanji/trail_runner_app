import styled from 'styled-components';
import { Drawer, List, Button } from '@mui/material';

export const StyledCart = styled(Drawer)`
  z-index: 2000;
  .MuiPaper-root {
    width: 27%;
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
