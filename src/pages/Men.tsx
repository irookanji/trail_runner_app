/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  CircularProgress,
  Slider,
  Typography,
} from '@mui/material';
import theme from '../theme';
import Card from './card/Card';

export const Container = styled(Box)`
  display: flex;
  margin-bottom: 4rem;
  ${theme.breakpoints.up('xs')} {
    flex-direction: column;
  }
  ${theme.breakpoints.up('md')} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Loader = styled(CircularProgress)`
  margin: 100px auto;
  color: inherit;
`;

function Men() {
  const [filterPrice, setFilterPrice] = React.useState([0, 200]);
  const [search, setNewSearch] = useState('');
  const productsState = useSelector((state: any) => state.productsState.products);
  const products: {
    id: number;
    quantity: number,
    title: string,
    info: string,
    price: number,
    image: string,
    size: string,
    color: string,
    discount: number,
    inventory: number,
  }[] = [];
  productsState.filter((product: {
    id: number;
    quantity: number,
    title: string,
    info: string,
    price: number,
    image: string,
    size: string,
    color: string,
    discount: number,
    inventory: number,
    men: boolean
  }) => (product.men === true ? products.push(product) : null));

  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));

  const handleChange = (event: Event, newValue: any) => {
    setFilterPrice(newValue);
  };

  const filtered = products.filter((product) => (
    product.color.toLowerCase().includes(search.toLowerCase())
      && product.price >= Math.min(...filterPrice)
      && product.price <= Math.max(...filterPrice)
  ));

  return (
    <Container>
      <FormControl sx={{ padding: '30px' }}>
        <RadioGroup defaultValue="">
          <FormControlLabel onClick={() => setNewSearch('')} value="" control={<Radio />} label="All" />
          {products.map((product) => (
            <FormControlLabel
              key={product.id}
              onClick={() => setNewSearch(product.color)}
              value={product.color}
              control={<Radio />}
              label={product.color}
            />
          ))}
        </RadioGroup>
        <Typography sx={{ mt: '1rem' }}>Price</Typography>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={filterPrice}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={minPrice}
          max={maxPrice}
        />
      </FormControl>
      {products.length !== 0 ? <Card cartData={filtered} /> : <Loader />}
    </Container>
  );
}

export default React.memo(Men);
