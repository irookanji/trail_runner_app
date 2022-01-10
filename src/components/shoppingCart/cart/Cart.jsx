import React from "react";
import { Grid } from "@mui/material";
import CardItem from "../cardItem/CardItem";

const Cart = () => {
  return (
    <>
      <Grid container spacing={4}>
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
    </>
  );
};

export default Cart;
