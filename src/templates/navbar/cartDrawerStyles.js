import styled from 'styled-components';
import { Drawer, List, Button, Box, AppBar, Typography, Divider } from '@mui/material';
import theme from '../../theme';
import { Link } from 'react-router-dom';

export const StyledCart = styled(Drawer)`
  z-index: 2000;

  ${theme.breakpoints.up('xs')} {
    .MuiDrawer-paper {
      width: 100%;
    }
  }
  ${theme.breakpoints.up('md')} {
    .MuiDrawer-paper {
      width: 40%;
    }
  }
  ${theme.breakpoints.up('lg')} {
    .MuiDrawer-paper {
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    margin-right: 1rem;
    border-radius: 0.5rem;
  }
`;

export const DetailesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: -1.5rem;
`;

export const DetailesPrice = styled(Typography)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-top: 1rem;
`;

// Bottom aka footer
export const BottomContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  right: 0;
  bottom: 0;
  padding: 20px;
`;

export const StyledDivider = styled(Divider)`
  border-top: 1px solid rgb(211, 212, 213);
  margin: 1rem 0;
`;

export const BottomBtn = styled(Button)`
  width: 100%;
  display: block;
  margin: 0.5rem 0;
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
  &:hover {
    background-color: gray;
    border: 2px solid gray;
  }
`;

export const ProductContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50vh;
  margin: 0 1rem;
  overflow-x: hidden;
`;

export const Subtotal = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Shipping = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BottomTitle = styled(Typography)`
  color: rgb(33, 42, 47);
  letter-spacing: 0.5px;
  font-weight: 600;
`;

export const MiniCloseButton = styled.button`
  position: relative;
  height: 2rem;
  width: 2rem;
  border: none;
  background-color: inherit;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  &:hover {
    transform-origin: center;
    transform: rotate(45deg);
    transition: transform 250ms ease-in-out 0s;
  }
`;

export const SenaryHeader = styled(Typography)`
  margin: 0.6rem 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.75;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  color: rgb(33, 42, 47);
  padding: 0px;
`;

export const BottomImg = styled.img`
  width: 100%;
  overflow-x: hidden;
  cursor: pointer;
`;

export const QuantitySelector = styled(Box)`
  width: fit-content;
  border: 2px solid #d3d4d5;
  display: flex;
  flex-direction: row;
`;

export const Steper = styled(Button)`
  cursor: pointer;
  padding: 0px;
  min-width: 32.5px;
  text-align: center;
  font-weight: bold;
  color: #d3d4d5;
  transition: color 2s;
  &:hover {
    color: black;
  }
`;

export const Quantity = styled(Box)`
  padding: 5px;
  width: 100%;
  min-width: 20px;
  text-align: center;
  user-select: none;
  font-weight: 700;
  font-size: 16px;
  color: #212a2f;
`;

export const PriceContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.5rem;
`;
