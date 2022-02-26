import styled, { css } from 'styled-components';
import { Paper, Box, Typography } from '@mui/material';
import theme from '../../theme';

export const Title = styled(Typography)`
  font-weight: bold;
  ${theme.breakpoints.up('xs')} {
    margin-bottom: 1rem;
    color: #212a2f;
    font-size: 2rem;
    line-height: 3rem;
  }
  ${theme.breakpoints.up('md')} {
    color: white;
    font-size: 3rem;
    line-height: 4rem;
    letter-spacing: 0.2rem;
  }
`;

export const SubTitle = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: white;
  font-size: ${(props) => props.$fontSizeTitle || '1rem'};
  line-height: ${(props) => props.$lineHeightTitle || '1.7rem'};
  letter-spacing: ${(props) => props.letterSpacingTitle || 'normal'};
  margin: 0.5rem 0;
  ${theme.breakpoints.up('xs')} {
    margin-bottom: 1rem;
    color: #212a2f;
    font-size: 1.5rem;
    line-height: 1.7rem;
  }
  ${theme.breakpoints.up('md')} {
    color: white;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
  }
`;

export const ButtonContainer = styled(Box)`
  margin: 0.5rem;
  justify-content: center;
  ${theme.breakpoints.up('xs')} {
    display: flex;
    margin-top: 2rem;
  }
  ${theme.breakpoints.up('sm')} {
    display: initial;
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
    height: 400px;
    padding: 2rem;
    background: radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%);
  }

  ${theme.breakpoints.up('md')} {
    ${(props) =>
      props.$cover
        ? css`
            background-image: url(${(props) => props.$cover});
          `
        : null}
    justify-content: flex-end;
    padding: 3.5rem;
    height: 740px;
  }
`;
