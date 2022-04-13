import styled from 'styled-components';
import { Box, Typography, TextField } from '@mui/material';
import theme from '../theme';

export const Container = styled(Box)`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${theme.breakpoints.up('xs')} {
    background: radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%);
    padding: 1.5rem;
    margin-top: 2rem;
  }
  ${theme.breakpoints.up('md')} {
    background: #f8f7f5;
    margin-top: 6rem;
    width: 850px;
    min-width: 100%;
  }
`;

export const Title = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;

  ${theme.breakpoints.up('xs')} {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
  ${theme.breakpoints.up('md')} {
    font-size: 2rem;
    line-height: 4rem;
    margin-top: 4rem;
  }
`;

export const Description = styled(Typography)`
  display: flex;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.5px;

  ${theme.breakpoints.up('xs')} {
    font-size: 1rem;
    line-height: 1.7rem;
  }
  ${theme.breakpoints.up('md')} {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-top: 1rem;
    max-width: 60%;
  }
`;

export const StyledTextField = styled(TextField)`
  ${theme.breakpoints.up('xs')} {
    width: auto;
  }
  ${theme.breakpoints.up('md')} {
    width: 588px;
  }
`;

export const SignedAlertText = styled(Typography)`
  margin: 2rem;
  font-size: 1.5rem;
  color: #333333;
`;

export const NotePolicyText = styled(Typography)`
  margin: 1rem 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #74797c;
`;

export const Thumbnail = styled.img`
   width: 100px;
   height: 100px;
   `;
// About
export const GMCard = styled(Typography)`
  font-size: 18px;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
  border: 1px solid rgba(255, 255, 255, 0.23);
  cursor: pointer;
  &:hover {
    background-color: #F9FFFE;
  }
  ${theme.breakpoints.up('xs')} {
    display: flex;
    justify-content: center;
    min-width: 160px;
  }
  ${theme.breakpoints.up('md')} {
    background: #f8f7f5;
    min-width: 210px;
  }
`;

export const AboutSubTitle = styled(Typography)`
  margin: 2.5rem 0 1.5rem 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 14px;
  text-align: center;
`;
