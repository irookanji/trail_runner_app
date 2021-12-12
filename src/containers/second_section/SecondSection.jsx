import React from "react";
import cover from "../../assets/SecondCover.jpg";

import { Paper, Box, Typography, Button } from "@mui/material";

const SecondSection = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          background: "radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%)",
          textAlign: "center",
          padding: "1.5rem",
          flexDirection: "column", my: "2rem", justifyContent: "center"
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            mb: "1rem"
          }}
        >
          Seasons Change. Your Shoes Don’t Have To.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1rem",
            lineHeight: "1.7rem",
          }}
        >
          Soft and cozy wool shoes to keep you comfortable all year round.
        </Typography>

        <Box sx={{ display: "flex", mx: "1.5rem", mt: "1rem", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              background: "#212A2F",
              borderRadius: "2px",
              marginRight: "24px",
              padding: "17px auto",
              width: "180px",
              height: "48px",
              color: "white",
              border: " 0",
              outline: "none",
              cursor: "pointer",
              ":hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            SHOP MEN
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#212A2F",
              borderRadius: "2px",
              padding: "17px auto",
              width: "180px",
              height: "48px",
              color: "white",
              border: " 0",
              outline: "none",
              cursor: "pointer",
              ":hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            SHOP WOMEN
          </Button>
        </Box>
      </Box>
            {/* Desktop Screen */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          textAlign: "center",
          flexDirection: "column",
          mt: "6rem",
          justifyContent: "center",
          minWidth: "100%",
        }}
      >
        <Paper
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundImage: `url(${cover})`,
            position: "relative",
            backgroundSize: "cover",
            minHeight: "700px",
            width: "100%",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            flexDirection: "column",
          }}
        ></Paper>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2rem",
            lineHeight: "4rem",
            mt: "4rem"
          }}
        >
          Seasons Change. Your Shoes Don’t Have To.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.5rem",
            lineHeight: "2.5rem",
            mt: "4rem",
            letterSpacing: "0.5px"
          }}
        >
          Soft and cozy wool shoes to keep you comfortable all year round.
        </Typography>

        <Box sx={{ display: "flex", m: "2rem", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              background: "#212A2F",
              borderRadius: "2px",
              marginRight: "24px",
              padding: "17px auto",
              width: "180px",
              height: "48px",
              color: "white",
              border: " 0",
              outline: "none",
              cursor: "pointer",
              ":hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            SHOP MEN
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#212A2F",
              borderRadius: "2px",
              padding: "17px auto",
              width: "180px",
              height: "48px",
              color: "white",
              border: " 0",
              outline: "none",
              cursor: "pointer",
              ":hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            SHOP WOMEN
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SecondSection;