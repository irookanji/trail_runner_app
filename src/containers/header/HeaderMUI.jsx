import React from "react";
import cover from "../../assets/cover.jpg";
import CustomButton from "../../components/atoms/Button/CustomButton";

import { Paper, Box, Typography } from "@mui/material";

const HeaderMUI = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          background:
            "radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%)",
          textAlign: "center",
          padding: "3.5rem",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.5rem",
            lineHeight: "1.7rem",
          }}
        >
          The Trail Runner SWT Is Here.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1rem",
            lineHeight: "1.7rem",
            margin: "0.5rem 0",
          }}
        >
          Durable. Comfortable. Ready to get dirty.
        </Typography>

        <Box sx={{ display: "flex", m: "0.5rem", justifyContent: "center" }}>
          <CustomButton link="/" text="Shop Men" />
          <CustomButton link="/" text="Shop Women" />
        </Box>
      </Box>

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
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "3rem",
              lineHeight: "4rem",
              letterSpacing: "0.2rem",
            }}
          >
            The Trail Runner SWT Is Here.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              letterSpacing: "0.1rem",
              margin: "0.5rem 0",
            }}
          >
            Durable. Comfortable. Ready to get dirty.
          </Typography>

          <Box sx={{ mt: "2rem" }}>
            <CustomButton link="/" text="Shop Men" />
            <CustomButton link="/" text="Shop Women" />

            {/* <CustomButton textColor="white" bgColor="black" link="/" text="Reusable text"/>   */}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default HeaderMUI;
