import React, { useState } from 'react';
import { Box } from '@mui/material';
import Cart from '../../components/shoppingCart/card/Card';
import { MenData } from './MenData';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const treeUIValue = 'Light & Breezy Tree';
const woolUIValue = 'Soft & Cosy Wool';

const Men = () => {
  const [state, setState] = React.useState({
    tree: true,
    wool: true,
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { tree, wool } = state;
  const filteredItems = MenData.filter((item) => {
    if (wool === true && tree === true) return item.material === woolUIValue || treeUIValue;
    else if (wool === false && tree === false) return item.material === woolUIValue || treeUIValue;
    else if (tree === true) return item.material === treeUIValue;
    else if (wool === true) return item.material === woolUIValue;
  });

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
      >
        <FormLabel component="legend">Material</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} checked={tree} name="tree" />}
            label="Light & Breezy Tree"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange} checked={wool} name="wool" />}
            label="Soft & Cosy Wool"
          />
        </FormGroup>
      </Box>
      <Cart cartData={filteredItems} />
    </Box>
  );
};

export default Men;
