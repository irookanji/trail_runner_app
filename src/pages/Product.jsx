import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
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
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
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
          <img src={product.image} alt={product.title} />
        </Grid>
        <Grid xs={12} md={6} item>
          <Typography variant="h4">{product.title}</Typography>
          <Typography>{product.info}</Typography>
          <Typography>{product.material}</Typography>
          <Typography>{product.color}</Typography>
          <Typography sx={{ fontWeight: 'bolt', mt: '2rem' }}>{product.price}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
