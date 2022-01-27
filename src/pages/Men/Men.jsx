import React, { useEffect, useState } from 'react';
import Cart from '../../components/shoppingCart/card/Card';
import { Box, CircularProgress } from '@mui/material';
import { getProducts } from '../../requests';

const Men = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '15%',
          position: 'fixed',
          top: '12vh',
        }}
      ></Box>
      {products.length !== 0 ? (
        <Cart cartData={products} />
      ) : (
        <CircularProgress sx={{ margin: '100px auto' }} color="inherit" />
      )}
    </Box>
  );
};

export default Men;
