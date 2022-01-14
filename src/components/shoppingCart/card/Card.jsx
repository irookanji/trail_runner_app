import React from 'react';
import { Grid, Container } from '@mui/material';
import CardItem from '../cardItem/CardItem';

const Cart = (props) => {
  return (
    <Container>
      <Grid container justify="center" spacing={4} sx={{ mt: '1rem' }}>
        {props.cartData.map((slide) => (
          <Grid key={Math.floor(Math.random() * 100) + 1} item xs={12} sm={6} md={3}>
            <CardItem cardInfo={slide} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cart;
