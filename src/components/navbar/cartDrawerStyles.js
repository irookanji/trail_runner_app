import styled from 'styled-components';
import { Drawer, List, Button, Box, AppBar } from '@mui/material';
import theme from '../../theme';

export const StyledCart = styled(Drawer)`
  z-index: 2000;

  ${theme.breakpoints.up('xs')} {
    .MuiPaper-root {
      width: 100%;
    }
  }
  ${theme.breakpoints.up('md')} {
    .MuiPaper-root {
      width: 40%;
    }
  }
  ${theme.breakpoints.up('lg')} {
    .MuiPaper-root {
      width: 27%;
    }
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
  height: 34px;
  padding: 0;
  color: #212a2f;
  &:hover {
    background-color: #fff;
  }
`;

export const StyledNavbar = styled(Box)`
  display: flex;
  align-items: center;
  height: 90px;
  text-align: center;
  border-bottom: 5px solid rgb(245, 245, 245);
  margin: 0 1rem;
`;

export const StyledCloseButton = styled.button`
  left: 2rem;
  top: 50%;
  left: 50%;
  height: 4rem;
  width: 4rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    transform: rotate(45deg);
    transition: transform 250ms ease-in-out 0s;
  }
`;

// Navbar styles
export const Navigation = styled(AppBar)`
  background: white;
  color: #212a2f;
  min-height: 60px;
  width: 100%;
  z-index: 1300;
`;

export const LinksWrapper = styled(Box)`
  flex-wrap: nowrap;
  flex-grow: 0;
  display: flex;
`;

export const NavigationItem = styled(Button)`
  color: #212a2f;
  display: block;
`;
