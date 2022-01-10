import React from "react";
import { Grid, Container } from "@mui/material";
import CardItem from "../cardItem/CardItem";

const Cart = () => {
  return (
    <Container>
      <Grid container justify="center" spacing={4} sx={{mt:"1rem"}}>
        <Grid item xs={12} sm={6} md={3}>
          <CardItem />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardItem />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardItem />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardItem />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardItem />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
