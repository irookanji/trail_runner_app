import styled from "styled-components";
import { Paper, Box, Typography } from "@mui/material";
import breakpoint from "../../breakpoints";
import cover from "../../assets/cover.jpg";

export const Container = styled(Box)`
    @media only screen and ${breakpoint.device.xs} {
        display: flex;
      }
      
      @media only screen and ${breakpoint.device.md} {
        display: none;
      }
    background: radial-gradient(circle at 38% 50%, rgba(183, 154, 145, 1) 0%, rgba(207, 157, 83, 1) 100%);
    text-align: center;
    padding: 3.5rem;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled(Typography)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.fontSizeTitle || "1.5rem"};
    line-height: ${(props) => props.lineHeightTitle || "1.7rem"};
    letter-spacing: ${(props) => props.letterSpacingTitle || "normal"};
`

export const SubTitle = styled(Typography)`
    font-family: Roboto;
    font-style: normal;
    font-seight: bold;
    font-size: ${(props) => props.fontSizeTitle || "1rem"};
    line-height: ${(props) => props.lineHeightTitle || "1.7rem"};
    letter-spacing: ${(props) => props.letterSpacingTitle || "normal"};
    margin: 0.5rem 0;
`

export const ButtonContainer = styled(Box)`
    display: flex";
    margin: 0.5rem; 
    justify-content: center;
`

export const ImageCover = styled(Paper)`
    @media only screen and ${breakpoint.device.xs} {
        display: none;
      }
      
      @media only screen and ${breakpoint.device.md} {
        display: flex;
      }
    background-image: url(${cover});
    position: relative;
    background-size: cover;
    height: 740px;
    width: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    flex-direction: column;
`