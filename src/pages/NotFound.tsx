/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundPic from '../assets/NotFoundPic.svg';
import theme from '../theme';

export const Container = styled(Box)`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  ${theme.breakpoints.up('xs')} {
    width: 80%;
  }
  ${theme.breakpoints.up('md')} {
    width: 30%;
  }
`;

export const Title = styled(Typography)`
  margin: 7%;
  font-size: 1.5rem;
`;

export const Description = styled(Typography)`
  line-height: 1.5rem;
`;

export const Button = styled(Typography)`
  width: 8rem;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: #6c63ff;
  color: white;
  outline: none;
  transition: 0.2s;
  text-transform: uppercase;
  box-shadow: 1px 3px 20px -8px rgba(34, 60, 80, 0.23);
  &:hover {
    color: #fff;
    background-color: #999999;
  }
`;

function NotFound() {
  return (
    <Container>
      <img src={NotFoundPic} alt="Page not found" />
      <Title>UH OH! You're lost. ⍨</Title>
      <Description>
        The page you are looking for does not exist. How you got here is a mystery. But you can click the button below
        to go back to the homepage.
      </Description>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Container>
  );
}

export default NotFound;
