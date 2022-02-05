import styled from 'styled-components';
import { Box, Typography, TextField } from '@mui/material';
import theme from '../../theme';

export const Container = styled(Box)`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${theme.breakpoints.up('xs')} {
    background: radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%);
    padding: 1.5rem;
    margin: 2rem 0;
  }
  ${theme.breakpoints.up('md')} {
    background: none;
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
