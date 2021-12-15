import React from "react";
import "./newArrivals.css";
import { Typography, Box } from "@mui/material";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { slides } from "./NewArrivalsData";
import arrowToRight from "../../assets/arrow_right.svg";
import arrowToLeft from "../../assets/arrow_left.svg";

const NewArrivals = () => {
  return (
    <>
      <Box sx={{ mx: "2rem" }}>
        <Typography
          sx={{
            display: "flex",
            mt: { xs: "1rem", sm: "2rem" },
            ml: { xs: "orem", md: "8rem" },
            mb: "2rem",
            fontSize: { xs: "22px", md: "32px" },
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: "42px",
            letterSpacing: "0.5px",
            color: "#212A2F",
          }}
        >
          New Arrivals
        </Typography>
        <Carousel
          plugins={[
            "centered",
            "infinite",
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button>
                    <img
                      src={arrowToLeft}
                      alt="Arrow To Left"
                      name="angle-double-left"
                    />
                  </button>
                ),
                arrowRight: (
                  <button>
                    <img
                      src={arrowToRight}
                      alt="Arrow To Right"
                      name="angle-double-right"
                    />
                  </button>
                ),
                addArrowClickHandler: true,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                "centered",
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "centered",
                "infinite",
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button>
                        <img
                          src={arrowToLeft}
                          alt="Arrow To Left"
                          name="angle-double-left"
                        />
                      </button>
                    ),
                    arrowRight: (
                      <button>
                        <img
                          src={arrowToRight}
                          alt="Arrow To Right"
                          name="angle-double-right"
                        />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={Math.floor(Math.random() * 100) + 1}
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: "1 1 0px",
              }}
            >
              <img
                className="new_arrivals_img"
                src={slide.image}
                alt={slide.info}
              />

              <Typography
                sx={{
                  mt: { xs: "1rem", sm: "1rem" },
                  fontSize: { xs: "14px", md: "20px" },
                  fontWeight: "bold"
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                sx={{
                  mt: { xs: "1rem", sm: "1rem" },
                  fontSize: { xs: "10px", md: "16px" },
                  width: "85%",
                }}
              >
                {slide.info}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default NewArrivals;
