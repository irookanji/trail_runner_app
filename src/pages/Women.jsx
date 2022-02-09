import React, { useEffect, useState } from 'react';
import Cart from '../components/shoppingCart/card/Card';
import ProductFilters from '../components/molecules/ProductFilters/ProductFilters';
import { Box, CircularProgress } from '@mui/material';
import { getProducts } from '../requests';
import styled from 'styled-components';
import theme from '../theme';

export const Container = styled(Box)`
  display: flex;
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

const Women = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await getProducts();
    const onlyWomanProducts = response.filter((product) => {
      return product.women === true;
    });
    setProducts(onlyWomanProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleFiltering = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <Container>
      <ProductFilters products={products} handleFiltering={handleFiltering} />
      {filteredProducts.length !== 0 ? (
        <Cart cartData={filteredProducts} />
      ) : products.length !== 0 ? (
        <Cart cartData={products} />
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default React.memo(Women);
