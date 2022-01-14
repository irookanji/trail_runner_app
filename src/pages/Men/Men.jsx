import React from 'react';
import { Box } from '@mui/material';
import Cart from '../../components/shoppingCart/card/Card';
import { MenData } from './MenData';

const Men = () => {
  return (
    <Box>
      <Cart cartData={MenData} />
    </Box>
  );
};

export default Men;
