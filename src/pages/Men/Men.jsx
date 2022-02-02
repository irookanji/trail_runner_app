import React, { useEffect, useState } from 'react';
import Cart from '../../components/shoppingCart/card/Card';
import { Box, CircularProgress, Checkbox, FormGroup, FormControlLabel, FormLabel } from '@mui/material';
import { getProducts } from '../../requests';

const treeUIValue = 'Light & Breezy Tree';
const woolUIValue = 'Soft & Cosy Wool';
const whiteColor = 'White';
const blueColor = 'Blue';
const blackColor = 'Black';
const greyColor = 'Grey';
const redColor = 'Red';

const Men = () => {
  const [products, setProducts] = useState([]);

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

  const [materialFilterState, setMaterialFilterState] = React.useState({
    tree: true,
    wool: true,
  });
  const [colorFilterState, setColorFilterState] = React.useState({
    white: false,
    red: false,
    black: false,
    grey: false,
    blue: false,
  });

  const materialFilterHandleChange = (event) => {
    setMaterialFilterState({
      ...materialFilterState,
      [event.target.name]: event.target.checked,
    });
  };
  const colorFilterHandleChange = (event) => {
    setColorFilterState({
      ...colorFilterState,
      [event.target.name]: event.target.checked,
    });
  };
  const { tree, wool } = materialFilterState;
  const { white, red, black, grey, blue } = colorFilterState;

  const productsFilteredByMaterials = products.filter((item) => {
    if ((wool === true && tree === true) || (wool === false && tree === false)) return item;
    else if (tree === true) return item.material === treeUIValue;
    else if (wool === true) return item.material === woolUIValue;
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3rem' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '15%',
            position: 'fixed',
            top: '12vh',
            mb: '1rem',
          }}
        >
          <FormLabel component="legend">Material</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={materialFilterHandleChange} checked={tree} name="tree" />}
              label="Light & Breezy Tree"
            />
            <FormControlLabel
              control={<Checkbox onChange={materialFilterHandleChange} checked={wool} name="wool" />}
              label="Soft & Cosy Wool"
            />
          </FormGroup>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '15%',
            position: 'fixed',
            top: '28vh',
          }}
        >
          <FormLabel component="legend">Color</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={materialFilterHandleChange} checked={tree} name="tree" />}
              label="White"
            />
            <FormControlLabel
              control={<Checkbox onChange={materialFilterHandleChange} checked={wool} name="wool" />}
              label="Blue"
            />
            <FormControlLabel
              control={<Checkbox onChange={materialFilterHandleChange} checked={wool} name="wool" />}
              label="Black"
            />
            <FormControlLabel
              control={<Checkbox onChange={materialFilterHandleChange} checked={wool} name="wool" />}
              label="Grey"
            />
            <FormControlLabel
              control={<Checkbox onChange={materialFilterHandleChange} checked={wool} name="wool" />}
              label="Red"
            />
          </FormGroup>
        </Box>
      </Box>
      {products.length !== 0 ? (
        <Cart cartData={productsFilteredByMaterials} />
      ) : (
        <CircularProgress sx={{ margin: '100px auto' }} color="inherit" />
      )}
    </Box>
  );
};

export default React.memo(Men);
