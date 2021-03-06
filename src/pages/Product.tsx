import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Typography, Box, Paper, Rating, Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getProduct } from '../requests';
import { addToCart } from '../redux/cartReducer';

export const ProductContainer = styled(Container)`
  margin: 6rem auto;
`;

export const ArrowBackContainer = styled(Box)`
  display: flex;
  margin: 1rem 0;
  cursor: pointer;
`;

export const Title = styled(Typography)`
  margin: 1rem 0;
  font-size: 2.1rem;
  font-weight: 400;
  font-style: normal;
`;

export const ProductColor = styled(Typography)`
  margin: 2% 0;
  font-size: 0.9rem;
  font-style: italic;
`;

export const Price = styled(Typography)<{component: any}>`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: bolt;
`;

export const Discount = styled(Box)`
  display: inline;
  text-decoration: line-through;
  color: #d3d3d3;
`;

export const AddToCartBtn = styled(Button)`
  background-color: #cac7c7;
  width: 8rem;
`;

export const LoadingText = styled(Typography)`
  margin: 2rem;
  font-size: 2rem;
`;

type productsType = {
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
    rating: number,
    material: string,
    description: string
}

export default function Product() {
  const { productNumber }: any = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<productsType>();

  const getProductById = async () => {
    const response = await getProduct(productNumber);
    setProduct(response);
  };

  useEffect(() => {
    getProductById();
  }, []);
  const history = useNavigate();
  return product ? (
    <ProductContainer>
      <ArrowBackContainer onClick={() => history(-1)}>
        <ArrowBackIcon />
        <Typography>Go Back</Typography>
      </ArrowBackContainer>

      <Grid container>
        <Grid xs={12} md={6} item>
          <Paper elevation={3} sx={{ maxWidth: '576px' }}>
            <img src={product.image} alt={product.title} style={{ display: 'block', width: '100%' }} />
          </Paper>
        </Grid>
        <Grid xs={12} md={6} item>
          <Box sx={{ ml: '2rem' }}>
            <Title>{product.title}</Title>
            <Typography>{product.material}</Typography>
            <ProductColor>{product.color}</ProductColor>
            <Typography>{product.description}</Typography>
            <Rating sx={{ mt: '.3rem' }} name="read-only" value={product.rating} readOnly />
            <Price component="div">
              {product.discount === 0 ? (
                <Box>
                  {product.price}
                  &euro;
                </Box>
              ) : (
                <>
                  <Discount>
                    {product.price}
                    &euro;
                  </Discount>
                  <Box sx={{ display: 'inline' }}>
                    {' '}
                    {product.price - product.discount}
                    &euro;
                  </Box>
                </>
              )}
            </Price>
            <AddToCartBtn
              onClick={() => {
                dispatch(
                  addToCart({
                    id: product.id,
                    quantity: 1,
                    title: product.title,
                    info: product.info,
                    price: product.price,
                    image: product.image,
                    size: product.size,
                    color: product.color,
                    discount: product.discount,
                    inventory: product.inventory,
                  }),
                );
              }}
            >
              Add To Cart
            </AddToCartBtn>
          </Box>
        </Grid>
      </Grid>
    </ProductContainer>
  ) : (
    <Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
      <LoadingText>Loading...</LoadingText>
    </Box>
  );
}
