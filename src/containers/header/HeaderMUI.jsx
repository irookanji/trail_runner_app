import React from "react";
import cover from "../../assets/cover.jpg";
import CustomButton from "../../components/atoms/Button/CustomButton";

import { Paper, Box } from "@mui/material";
import {
  Container,
  Title,
  SubTitle,
  ButtonContainer,
} from "./styles";

const HeaderMUI = () => {
  return (
    <>
      <Container>
        <Title variant="h2">The Trail Runner SWT Is Here.</Title>

        <SubTitle variant="h5">
          Durable. Comfortable. Ready to get dirty.
        </SubTitle>

        <ButtonContainer>
          <CustomButton link="/men" mBottom="1rem" text="Shop Men" />
          <CustomButton link="/women" mBottom="1rem" text="Shop Women" />
        </ButtonContainer>
      </Container>

      {/* Desktop view */}

      <Paper
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundImage: `url(${cover})`,
          position: "relative",
          backgroundSize: "cover",
          height: "740px",
          width: "100%",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            color: "white",
            position: "absolute",
            top: "70%",
            /* left: 21%; */
            margin: "0 54px",
          }}
        >
          <Title
            fontSizeTitle="3rem"
            lineHeightTitle="4rem"
            letterSpacingTitle="0.2rem"
            variant="h2"
          >
            The Trail Runner SWT Is Here.
          </Title>

          <SubTitle
            fontSizeTitle="1.5rem"
            lineHeightTitle="1.5rem"
            letterSpacingTitle="0.1rem"
            variant="h5"
          >
            Durable. Comfortable. Ready to get dirty.
          </SubTitle>

          <Box sx={{ mt: "2rem" }}>
            <CustomButton link="/men" text="Shop Men" />
            <CustomButton link="/women" text="Shop Women" />

            {/* <CustomButton textColor="white" bgColor="black" link="/" text="Reusable text"/>   */}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default HeaderMUI;
