import styled from "styled-components";
import { Button } from "@mui/material"

const StyledButton = styled(Button)`
    background: ${props => props.bgColor || "white"};
    border-radius: 2px;
    margin-right: 24px;
    // padding: ${props => props.paddingButton || "17px 34px"};
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    width: ${props => props.customWidth || "180px"};
    height: 48px;
    color: ${props => props.textColor || "#212A2F"};
    margin-top: ${props => props.mTop || "0"};
    border: 0;
    outline: none;
    cursor: pointer;
    &:hover {
        background: ${props => props.hoverColor || "rgb(219, 215, 215)"};
        color: white;
    }
`
 
export default StyledButton;