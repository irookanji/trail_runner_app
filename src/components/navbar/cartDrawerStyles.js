import styled from 'styled-components';
import { Drawer, List, Button, Box, AppBar, Typography } from '@mui/material';
import theme from '../../theme';
import { Link } from 'react-router-dom';

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

// CartContent styles
export const CartContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 55%;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const TitleEmptyCart = styled(Typography)`
  color: rgb(33, 42, 47);
  letter-spacing: 0.5px;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin: 0px 0px 24px;
`;

export const ButtonsEmptyCart = styled(Button)`
  display: block;
  margin-bottom: 12px;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;
  background-color: transparent;
  border: 2px solid rgb(33, 42, 47);
  color: rgb(33, 42, 47);
  font-size: 1rem;
  padding: 13px 18px;
  cursor: pointer;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  position: relative;
  border-radius: 2px;
  font-weight: 700;
  &:hover {
    background-color: rgb(33, 42, 47);
    border-color: rgb(33, 42, 47);
    color: rgb(255, 255, 255);
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;

export const CartItem = styled(Box)`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  width: 90%;
  img {
    width: 100px;
    margin-right: 1rem;
    border-radius: 0.5rem;
  }
`;

export const DetailesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const DetailesPrice = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const BottomContainer = styled(Box)`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px;
  position: fixed;
  background-color: red;
  border-top: 5px solid rgb(245, 245, 245);
`;

export const BottomBtn = styled(Button)`
  width: 100%;
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  padding: 13px 18px;
  cursor: pointer;
  letter-spacing: 2px;
  background-color: rgb(33, 42, 47);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(33, 42, 47);
  text-align: center;
  text-decoration: none;
  opacity: 1;
  border-radius: 2px;
  font-weight: 700;
`;
