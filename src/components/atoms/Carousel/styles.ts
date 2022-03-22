import styled from 'styled-components';
import { Box, Typography, Paper } from '@mui/material';
import theme from '../../../theme';

export const Container = styled(Box)`
  max-width: 100%;
  margin: 0 1rem;
`;

export const InfoCardContainer = styled(Box)`
  padding: 0 2rem;
  width: 100%;
`;

export const CommonContainer = styled(Box)`
  position: relative;
  max-width: 100%;
`;

export const SlideContainer = styled(Paper)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 4px 4px 26px -7px rgba(34, 60, 80, 0.2);
  min-height: 560px;
  ${theme.breakpoints.down('sm')} {
    min-height: 440px;
  }
`;

export const ImageContainer = styled(Box)`
  overflow: hidden;
  max-width: 100%;

  ${theme.breakpoints.up('xs')} {
    height: 290px;
    min-width: 100%;
  }

  ${theme.breakpoints.up('md')} {
    height: 396px;
  }
`;

export const ImageCarousel =
  styled(Paper) <
  { $cover: string } >
  `
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
  line-height: 42px;
  letter-spacing: 0.5px;
  color: #212a2f;
  ${theme.breakpoints.up('xs')} {
    margin-bottom: 1.5rem;
    font-size: 22px;
  }
  ${theme.breakpoints.up('sm')} {
    margin-top: 2rem;
  }

  ${theme.breakpoints.up('md')} {
    margin-top: 6rem;
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
  width: 85%;
  ${theme.breakpoints.up('xs')} {
    margin-top: 1rem;
    font-size: 14px;
  }
  ${theme.breakpoints.up('lg')} {
    font-size: 16px;
  }
`;

export const ArrowBtn = styled(Box)`
  z-index: 1;
  ${theme.breakpoints.up('xs')} {
    img {
      display: none;
    }
  }
  ${theme.breakpoints.up('md')} {
    img {
      display: block;
    }
  }
`;
