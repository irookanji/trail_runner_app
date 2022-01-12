import React from "react";
import { Box } from "@mui/material";
import Cart from "../../components/shoppingCart/cart/Cart";
import { WomenData } from "./WomanData";

const Women = () => {
  return (
    <Box>
      <Cart cartData={WomenData} />
    </Box>
  );
};

export default Women;
