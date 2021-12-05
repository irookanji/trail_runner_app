import React from "react";

import Paper from "@mui/material/Paper";
import cover from "../../assets/cover.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const HeaderMUI = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          background: "#D2BA9A",
          borderRadius: "1rem",
          textAlign: "center",
          padding: "1rem",
          flexDirection: "column", mt: "2rem", justifyContent: "center", mx: "1rem"
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2rem",
            lineHeight: "4rem",
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
            lineHeight: "2.5rem",
            margin: "0.5rem 0",
          }}
        >
          Durable. Comfortable. Ready to get dirty.
        </Typography>

        <Box sx={{ display: "flex", m: "2rem", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              background: "white",
              borderRadius: "2px",
              marginRight: "24px",
              padding: "17px auto",
              width: "180px",
              height: "48px",
              color: "#212A2F",
              border: " 0",
              outline: "none",
              cursor: "pointer",
              ":hover": {
                background: "rgb(219, 215, 215)",
                color: "white",
              },
            }}
          >
            SHOP MEN
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "white",
              borderRadius: "2px",
              padding: "17px auto",
              width: "180px",
              height: "48px",
              color: "#212A2F",
              border: " 0",
              outline: "none",
              cursor: "pointer",
              ":hover": {
                background: "rgb(219, 215, 215)",
                color: "white",
              },
            }}
          >
            SHOP WOMEN
          </Button>
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
            <Button
              variant="contained"
              sx={{
                background: "white",
                borderRadius: "2px",
                marginRight: "24px",
                padding: "17px auto",
                width: "180px",
                height: "48px",
                color: "#212A2F",
                border: " 0",
                outline: "none",
                cursor: "pointer",
                ":hover": {
                  background: "rgb(219, 215, 215)",
                  color: "white",
                },
              }}
            >
              SHOP MEN
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "white",
                borderRadius: "2px",
                marginRight: "24px",
                padding: "17px auto",
                width: "180px",
                height: "48px",
                color: "#212A2F",
                border: " 0",
                outline: "none",
                cursor: "pointer",
                ":hover": {
                  background: "rgb(219, 215, 215)",
                  color: "white",
                },
              }}
            >
              SHOP WOMEN
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default HeaderMUI;
