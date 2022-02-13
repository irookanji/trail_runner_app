import React from 'react';
import { StyledButton, StyledLink } from './styles.js';

export default function CustomButton(props) {
  return (
    <StyledLink to={props.link}>
      <StyledButton
        $textColor={props.$textColor}
        $xsCustomWidth={props.$xsCustomWidth}
        $customWidth={props.$buttonWidth}
        $mTop={props.$mTop}
        $mBottom={props.$mBottom}
        $bgColor={props.$bgColor}
        $hoverColor={props.$hoverColor}
      >
        {props.text}
      </StyledButton>
    </StyledLink>
  );
}
