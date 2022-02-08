import React, { useEffect, useState } from 'react';
import Cart from '../components/shoppingCart/card/Card';
import ProductFilters from '../components/molecules/ProductFilters/ProductFilters';
import { Box, CircularProgress } from '@mui/material';
import { getProducts } from '../requests';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await getProducts();
    const onlyManProducts = response.filter((product) => {
      return product.men === true;
    });
    setProducts(onlyManProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleFiltering = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      <ProductFilters products={products} handleFiltering={handleFiltering} />
      {filteredProducts.length !== 0 ? <Cart cartData={filteredProducts} /> : <Cart cartData={products} />}
      {/* <CircularProgress sx={{ margin: '100px auto' }} color="inherit" /> */}
    </Box>
  );
};

export default React.memo(Men);
