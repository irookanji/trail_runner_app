import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import breakpoint from "../../../breakpoints";

export const Container = styled(Box)`
  margin: 0 2rem;
`;

export const SlideContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 42px;
  letter-spacing: 0.5px;
  color: #212a2f;
  @media only screen and ${breakpoint.device.xs} {
    margin-top: 1rem;
    margin-left: orem;
    font-size: 22px;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 2rem;
  }

  @media only screen and ${breakpoint.device.md} {
    margin-top: 8rem;
    font-size: 32px;
  }
`;

export const SubTitle = styled(Typography)`
  @media only screen and ${breakpoint.device.xs} {
    margin-top: 1rem;
    font-size: 14px;
  }
  @media only screen and ${breakpoint.device.md} {
    font-size: 20px;
  }
  font-weight: bold;
`;

export const Description = styled(Typography)`
  @media only screen and ${breakpoint.device.xs} {
    margin-top: 1rem;
    font-size: 10px;
  }
  @media only screen and ${breakpoint.device.md} {
    font-size: 16px;
  }
  width: 85%;
`;
