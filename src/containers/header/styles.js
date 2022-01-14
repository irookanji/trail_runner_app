import styled, { css } from "styled-components";
import { Paper, Box, Typography } from "@mui/material";
import breakpoint from "../../breakpoints";

export const Title = styled(Typography)`
  font-weight: bold;
  @media only screen and ${breakpoint.device.xs} {
    margin-bottom: 1rem;
    color: #212a2f;
    font-size: 2rem;
    line-height: 3rem;
  }
  @media only screen and ${breakpoint.device.md} {
    color: white;
    font-size: 3rem;
    line-height: 4rem;
    letter-spacing: 0.2rem
  }
`;

export const SubTitle = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: white;
  font-size: ${(props) => props.fontSizeTitle || "1rem"};
  line-height: ${(props) => props.lineHeightTitle || "1.7rem"};
  letter-spacing: ${(props) => props.letterSpacingTitle || "normal"};
  margin: 0.5rem 0;
  @media only screen and ${breakpoint.device.xs} {
    margin-bottom: 1rem;
    color: #212a2f;
    font-size: 1.5rem;
    line-height: 1.7rem;
  }
  @media only screen and ${breakpoint.device.md} {
    color: white;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
  }
`;

export const ButtonContainer = styled(Box)`
  margin: 0.5rem;
  justify-content: center;
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    margin-top: 2rem;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: initial;
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
    height: 400px;
    padding: 2rem;
    background: radial-gradient(
      circle at 38% 50%,
      rgba(183, 154, 145, 1) 0%,
      rgba(207, 157, 83, 1) 100%
    );
  }

  @media only screen and ${breakpoint.device.md} {
    ${(props) =>
      props.$cover
        ? css`
            background-image: url(${(props) => props.$cover});
          `
        : null}
    justify-content: flex-end;
    padding: 3.5rem;
    height: 740px;
  }
`;
