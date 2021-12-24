import React from "react";
import StyledButton from "./styles.js";

export default function CustomButton(props) {
  return <StyledButton textColor={props.textColor} bgColor={props.bgColor}>{props.text}</StyledButton>;
}
