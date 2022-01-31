import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Paper, Rating } from '@mui/material';
// import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Link } from 'react-router-dom';
import { getProducts } from '../requests';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function Product() {
  const { productNumber } = useParams();
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const product = products[productNumber];
  const history = useNavigate();
  return products.length !== 0 ? (
    <Container
      sx={{
        mt: '6rem',
      }}
    >
      <Box onClick={() => history(-1)} sx={{ display: 'flex', cursor: 'pointer' }}>
        <ArrowBackIcon />
        <Typography>Go Back</Typography>
      </Box>

      <Grid container>
        <Grid xs={12} md={6} item>
          <Paper elevation={3} sx={{ maxWidth: '576px' }}>
            <img src={product.image} alt={product.title} style={{ display: 'block', width: '100%' }} />
          </Paper>
        </Grid>
        <Grid xs={12} md={6} item>
          <Box sx={{ ml: '2rem' }}>
            <Typography variant="h4" sx={{ my: '1rem' }}>
              {product.title}
            </Typography>
            <Typography>{product.info}</Typography>
            <Typography>{product.material}</Typography>
            <Typography>{product.color}</Typography>
            <Typography>{product.description}</Typography>
            <Rating sx={{ mt: '.3rem' }} name="read-only" value={product.rating} readOnly />
            <Typography component="div" sx={{ fontSize: '2rem', fontWeight: 'bolt', mt: '1rem' }}>
              {product.discount === 0 ? (
                <Box>{product.price}&euro;</Box>
              ) : (
                <>
                  <Box sx={{ textDecoration: 'line-through', display: 'inline', color: '#D3D3D3' }}>
                    {product.price}&euro;
                  </Box>
                  <Box sx={{ display: 'inline' }}> {product.price - product.discount}&euro;</Box>
                </>
              )}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
      <Typography sx={{ mt: '2rem', ml: '2rem', fontSize: '2rem' }}>Loading...</Typography>
    </Box>
  );
}
