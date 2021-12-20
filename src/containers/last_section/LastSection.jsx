import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const LastSection = () => {
  return (
    <>
      {/* Mobile view */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          background:
            "radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%)",
          textAlign: "center",
          padding: "1.5rem",
          flexDirection: "column",
          my: "2rem",
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
            lineHeight: "2rem",
            mb: "1rem",
          }}
        >
          Want First Dibs?
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "1.7rem",
            letterSpacing: "0.5px",
          }}
        >
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </Typography>

        <Box sx={{ mt: "2rem" }}>
          <TextField
            id="standard-basic"
            label="Enter Your Email"
            variant="standard"
            sx={{ width: "auto" }}
          />
          <Button
            variant="contained"
            sx={{
              background: "#212A2F",
              borderRadius: "2px",
              marginRight: "24px",
              padding: "17px auto",
              width: "111px",
              height: "48px",
              color: "white",
              border: " 0",
              outline: "none",
              mt: "1rem",
              cursor: "pointer",
              ":hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            SIGN IN
          </Button>
        </Box>
        <Typography
          variant="h7"
          sx={{
            my: "1rem",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "14px",
            textAlign: "center",
            color: "#74797C"
          }}
        >
          Note: You can opt-out at any time. See our Privacy Policy and Terms
        </Typography>
      </Box>

      {/* Desktop Screen */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          textAlign: "center",
          flexDirection: "column",
          mt: "6rem",
          justifyContent: "center",
          alignItems: "center",
          width: "850px",
          minWidth: "100%",
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
            mt: "4rem",
          }}
        >
          Want First Dibs?
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1.5rem",
            lineHeight: "2.5rem",
            mt: "1rem",
            letterSpacing: "0.5px",
            maxWidth: "60%",
          }}
        >
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </Typography>

        <Box sx={{ mt: "2rem" }}>
          <TextField
            id="standard-basic"
            label="Enter Your Email Address"
            variant="standard"
            sx={{ width: "588px" }}
          />
          <Button
            variant="contained"
            sx={{
              background: "#212A2F",
              borderRadius: "2px",
              marginRight: "24px",
              padding: "17px auto",
              width: "111px",
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
            SIGN IN
          </Button>
        </Box>
        <Typography
          variant="h7"
          sx={{
            my: "1rem",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "14px",
            textAlign: "center",
            color: "#74797C"
          }}
        >
          Note: You can opt-out at any time. See our Privacy Policy and Terms
        </Typography>
      </Box>
    </>
  );
};

export default LastSection;
