import React from 'react';
import { Grid, Container } from '@mui/material';
import CardItem from './CardItem';

const Card = ({ products, addToCart, cartData }) => {
  return (
    <Container>
      <Grid container justify="center" spacing={4} sx={{ mt: '1rem' }}>
        {cartData.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <CardItem cardInfo={product} onAddToCartClicked={() => addToCart(product.id)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Card;
