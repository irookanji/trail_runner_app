import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import theme from '../../../theme';

export const Container = styled(Box)`
  margin: 0 2rem;
`;

export const SlideContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`;

export const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 42px;
  letter-spacing: 0.5px;
  color: #212a2f;
  ${theme.breakpoints.up('xs')} {
    margin-top: 1rem;
    margin-left: 0;
    font-size: 22px;
  }
  ${theme.breakpoints.up('sm')} {
    margin-top: 2rem;
  }

  ${theme.breakpoints.up('md')} {
    margin-top: 8rem;
    font-size: 32px;
  }
`;

export const SubTitle = styled(Typography)`
  ${theme.breakpoints.up('xs')} {
    margin-top: 1rem;
    font-size: 16px;
  }
  ${theme.breakpoints.up('lg')} {
    font-size: 20px;
  }
  font-weight: bold;
`;

export const Description = styled(Typography)`
  ${theme.breakpoints.up('xs')} {
    margin-top: 1rem;
    font-size: 14px;
  }
  ${theme.breakpoints.up('lg')} {
    font-size: 16px;
  }
  width: 85%;
`;
