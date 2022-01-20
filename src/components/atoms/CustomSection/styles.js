import styled, { css } from 'styled-components';
import { Paper, Box, Typography } from '@mui/material';
import theme from '../../../theme';

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${theme.breakpoints.up('xs')} {
    background: radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%);
    margin: 4rem 0;
    padding: 1rem;
  }
  ${theme.breakpoints.up('md')} {
    background: none;
    max-width: 65%;
    margin: 0 auto;
  }
`;

export const Title = styled(Typography)`
  font-weight: bold;
  text-align: center;
  font-size: ${(props) => props.$fontSizeTitle || '1.5rem'};
  line-height: ${(props) => props.$lineHeightTitle || '2rem'};
  margin-bottom: 1rem;
  ${theme.breakpoints.up('md')} {
    margin-top: 4rem;
  }
`;

export const SubTitle = styled(Typography)`
  font-weight: ${(props) => props.$fontWeightSubTitle || 'bold'};
  text-align: center;
  font-size: ${(props) => props.$fontSizeSubTitle || '1rem'};
  line-height: ${(props) => props.$lineHeightSubTitle || '1.7rem'};
  margin: 0.5rem 0;
  ${theme.breakpoints.up('md')} {
    margin-top: 4rem;
    letter-spacing: 0.5px;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  ${theme.breakpoints.up('xs')} {
    margin: 2rem;
  }
  ${theme.breakpoints.up('sm')} {
    margin: 2rem;
  }
`;

export const ImageCover = styled(Paper)`
  display: flex;
  position: relative;
  background-size: cover;
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  flex-direction: column;

  ${theme.breakpoints.up('xs')} {
    display: none;
    height: 400px;
    padding: 2rem;
    background: radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%);
  }

  ${theme.breakpoints.up('md')} {
    display: flex;
    ${(props) =>
      props.$cover
        ? css`
            background-image: url(${(props) => props.$cover});
          `
        : null}
    margin-top: 6rem;
    height: 542px;
    background-size: cover;
    width: 100%;
  }
`;
