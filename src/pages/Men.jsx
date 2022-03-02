import React, { useState } from 'react';
import Card from './card/Card';
import ProductFilters from '../components/molecules/ProductFilters/ProductFilters';
import { Box, CircularProgress } from '@mui/material';
import styled from 'styled-components';
import theme from '../theme';
import { useSelector } from 'react-redux';

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

const Men = () => {
  const productsState = useSelector((state) => state.productsState.products);
  console.log(typeof productsState);
  console.log(productsState);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const onlyMenProducts = productsState.filter((product) => {
    return product.men === true;
  });
  setProducts(onlyMenProducts);

  const handleFiltering = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <Container>
      <ProductFilters products={products} handleFiltering={handleFiltering} />
      {filteredProducts.length !== 0 ? (
        <Card cartData={filteredProducts} />
      ) : products.length !== 0 ? (
        <Card cartData={products} />
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default React.memo(Men);
