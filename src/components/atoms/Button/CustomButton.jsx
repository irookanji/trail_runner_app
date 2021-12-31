import React from "react";
import StyledButton from "./styles.js";

export default function CustomButton(props) {
  return (
    <StyledButton
      textColor={props.textColor}
      customWidth={props.customWidth}
      mTop={props.mTop}
      mBottom={props.mBottom}
      bgColor={props.bgColor}
      hoverColor={props.hoverColor}
    >
      {props.text}
    </StyledButton>
  );
}
