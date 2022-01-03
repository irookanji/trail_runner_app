import React from "react";
import { Container, Title, SubTitle } from "./textStyles.js";

export default function CustomText(props) {
  return (
    <Container>
      <Title
        textColor={props.textColor}
        customWidth={props.customWidth}
        mTop={props.mTop}
        mBottom={props.mBottom}
        bgColor={props.bgColor}
        hoverColor={props.hoverColor}
      >
        {props.text}
      </Title>
      <SubTitle></SubTitle>

      {props.children}      
    </Container>
  );
}
