import styled, { css } from "styled-components";
import { Paper, Box, Typography } from "@mui/material";
import breakpoint from "../../../breakpoints";

export const Title = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: ${(props) => props.fontSizeTitle || "1.5rem"};
  line-height: ${(props) => props.lineHeightTitle || "2rem"};
  margin-bottom: 1rem;
  @media only screen and ${breakpoint.device.md} {
    margin-top: 4rem;
  }
`;

export const SubTitle = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: ${(props) => props.fontSizeSubTitle || "1rem"};
  line-height: ${(props) => props.lineHeightSubTitle || "1.7rem"};
  margin: 0.5rem 0;
  @media only screen and ${breakpoint.device.md} {
    margin-top: 4rem;
    letter-spacing: 0.5px;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  @media only screen and ${breakpoint.device.xs} {
    margin: 0 1.5rem;
    margin-top: 1rem;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin: 2rem;
  }
`;

export const ImageCover = styled(Paper)`
  display: flex;
  position: relative;
  background-size: cover;
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  flex-direction: column;

  @media only screen and ${breakpoint.device.xs} {
    display: none;
    height: 400px;
    padding: 2rem;
    background: radial-gradient(
      circle at 38% 50%,
      rgba(183, 154, 145, 1) 0%,
      rgba(207, 157, 83, 1) 100%
    );
  }

  @media only screen and ${breakpoint.device.md} {
    display: flex;
    ${(props) =>
      props.$cover
        ? css`
            background-image: url(${(props) => props.$cover});
          `
        : null}
    margin-top: 6rem;
    height: 542px;
    background-size: cover;
    width: 100%;
  }
`;
