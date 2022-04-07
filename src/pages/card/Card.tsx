import React from 'react';
import { Grid, Container } from '@mui/material';
import CardItem from './CardItem';
import { addToCart } from '../../redux/cartReducer';

type Props = {
  cartData: {
    id: number;
    quantity: number,
    title: string,
    info: string,
    price: number,
    image: string,
    size: string,
    color: string,
    discount: number,
    inventory: number,
  }[];
}

function Card({ cartData }: Props) {
  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: '1rem' }}>
        {cartData.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <CardItem cardInfo={product} onAddToCartClicked={() => addToCart(product.id)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Card;
