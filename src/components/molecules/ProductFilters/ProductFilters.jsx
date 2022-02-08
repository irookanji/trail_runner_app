import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Checkbox, FormGroup, FormControlLabel, FormLabel } from '@mui/material';

const treeUIValue = 'Light & Breezy Tree';
const woolUIValue = 'Soft & Cosy Wool';
const whiteColor = 'White';
const blueColor = 'Blue';
const blackColor = 'Black';

const ProductFilters = (props) => {
  const [treeMaterialFilterState, setTreeMaterialFilterState] = useState(true);
  const [woolMaterialFilterState, setWoolMaterialFilterState] = useState(true);
  const [colorFilterState, setColorFilterState] = useState({
    white: false,
    blue: false,
    black: false,
  });

  useEffect(() => {
    const productsFilteredByMaterials = filterProductsBy();
    props.handleFiltering(productsFilteredByMaterials);
  }, [treeMaterialFilterState, woolMaterialFilterState]);

  const { white, blue, black } = colorFilterState;

  const treeMaterialFilterHandle = (event) => {
    setTreeMaterialFilterState(event.target.checked);
  };

  const woolMaterialFilterHandle = (event) => {
    setWoolMaterialFilterState(event.target.checked);
  };

  const filterProductsBy = () => {
    return props.products.filter((item) => {
      if (
        (woolMaterialFilterState === true && treeMaterialFilterState === true) ||
        (woolMaterialFilterState === false && treeMaterialFilterState === false)
      )
        return item;
      else if (treeMaterialFilterState === true && woolMaterialFilterState === false)
        return item.material === treeUIValue;
      else if (woolMaterialFilterState === true && treeMaterialFilterState === false)
        return item.material === woolUIValue;
    });
  };

  const colorFilterHandleChange = (event) => {
    setColorFilterState({
      ...colorFilterState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%', mt: '5%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'flex-start',
          // width: '15%',
          // position: 'fixed',
          // top: '12vh',
          mb: '1rem',
        }}
      >
        <FormLabel component="legend">Material</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={treeMaterialFilterHandle} checked={treeMaterialFilterState} name="tree" />}
            label="Light & Breezy Tree"
          />
          <FormControlLabel
            control={<Checkbox onChange={woolMaterialFilterHandle} checked={woolMaterialFilterState} name="wool" />}
            label="Soft & Cosy Wool"
          />
        </FormGroup>
      </Box>

      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          // width: '15%',
          // position: 'fixed',
          top: '28vh',
        }}
      >
        <FormLabel component="legend">Color</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={colorFilterHandleChange} checked={tree} name="tree" />}
            label="White"
          />
          <FormControlLabel
            control={<Checkbox onChange={colorFilterHandleChange} checked={wool} name="wool" />}
            label="Blue"
          />
          <FormControlLabel
            control={<Checkbox onChange={colorFilterHandleChange} checked={wool} name="wool" />}
            label="Black"
          />
        </FormGroup>
      </Box> */}
    </Box>
  );
};

export default ProductFilters;
