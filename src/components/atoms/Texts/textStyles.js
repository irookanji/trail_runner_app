import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import breakpoint from "../../../breakpoints";

export const Container = styled(Box)`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    background: radial-gradient(
      circle at 38% 50%,
      rgba(183, 154, 145, 1) 0%,
      rgba(207, 157, 83, 1) 100%
    );
    padding: 1.5rem;
    margin: 2rem 0;
  }

  @media only screen and ${breakpoint.device.md} {
    display: none;
    min-width: 100%;
    margin-top: 6rem;
  }

  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
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
  font-size: ${(props) => props.fontSizeSubTitle || "1rem"};
  line-height: ${(props) => props.lineHeightSubTitle || "1.7rem"};
  margin: 0.5rem 0;
  @media only screen and ${breakpoint.device.md} {
    margin-top: 4rem;
    letter-spacing: 0.5px;
  }
`;
