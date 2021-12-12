import React from "react";
import cover from "../../assets/ThirdCover.jpg";

import { Paper, Box, Typography, Button } from "@mui/material";

const ThirdSection = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          background: "radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%)",
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
          Made From Nature, For Nature
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
          We craft with planet-friendly natural materials, like merino wool and
          eucalyptus trees, because they're our best chance for a sustainable
          future.
        </Typography>

        <Box
          sx={{
            display: "flex",
            mx: "1.5rem",
            mt: "1rem",
            justifyContent: "center",
          }}
        >
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
            SEE HOW
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
          alignItems: "center",
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

        <Box
          sx={{
            width: "655px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            Made From Nature, For Nature
          </Typography>

          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "1.5rem",
              lineHeight: "2.5rem",
              mt: "3rem",
              letterSpacing: "0.5px",
            }}
          >
            We craft with planet-friendly natural materials, like merino wool
            and eucalyptus trees, because they're our best chance for a
            sustainable future.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", m: "2rem", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              background: "#212A2F",
              borderRadius: "2px",
              marginRight: "24px",
              padding: "17px auto",
              width: "384px",
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
            SEE HOW
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ThirdSection;