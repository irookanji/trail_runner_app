import styled from 'styled-components';
import { Box, Typography, Paper } from '@mui/material';
import theme from '../../../theme';

export const Container = styled(Box)`
  margin: 0 2rem;
`;

export const SlideContainer = styled(Box)`
  max-width: 396px;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  cursor: pointer;
`;

export const ImageContainer = styled(Box)`
  overflow: hidden;

  ${theme.breakpoints.up('xs')} {
    width: 290px;
    height: 290px;
  }

  ${theme.breakpoints.up('md')} {
    width: 396px;
    height: 396px;
  }
`;

export const ImageCarousel = styled(Paper)`
  display: flex;
  position: relative;
  background-size: cover;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  background-image: url(${(props) => props.$cover});
  &:hover {
    transform: scale(1.2);
  }
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
