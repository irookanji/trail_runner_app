import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { MenData } from '../pages/Men/MenData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function Product() {
  const { productNumber } = useParams();
  const product = MenData[productNumber];
  return (
    <Container
      sx={{
        mt: '6rem',
      }}
    >
      <Link to="/men">
        <Box sx={{ display: 'flex' }}>
          <ArrowBackIcon />
          <Typography>Go Back</Typography>
        </Box>
      </Link>

      <Grid container>
        <Grid xs={12} md={6} item>
          <Paper elevation={3} sx={{ maxWidth: '576px' }}>
            <img src={product.image} alt={product.title} style={{ display: 'block', width: '100%' }} />
          </Paper>
        </Grid>
        <Grid xs={12} md={6} item>
          <Box sx={{ ml: '2rem' }}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography>{product.info}</Typography>
            <Typography>{product.material}</Typography>
            <Typography>{product.color}</Typography>
            <Typography sx={{ fontSize: '2rem', fontWeight: 'bolt', mt: '1rem' }}>{product.price}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
