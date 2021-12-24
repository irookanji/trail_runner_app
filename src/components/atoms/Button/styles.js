import styled from "styled-components";

const StyledButton = styled.a`
    background: ${props => props.bgColor || "white"};
    border-radius: 2px;
    margin-right: 24px;
    padding: 16px 34px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    width: 180px;
    height: 48px;
    color: ${props => props.textColor || "#212A2F"};
    border: 0;
    outline: none;
    cursor: pointer;
    &:hover {
        background: rgb(219, 215, 215);
        color: white;
    }
`
 
export default StyledButton;