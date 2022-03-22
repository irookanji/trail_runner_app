import React from 'react';
import { StyledButton, StyledLink } from './styles';

export default function CustomButton(props) {
  return (
    <StyledLink to={props.link}>
      <StyledButton
        $xsCustomWidth={props.$xsCustomWidth}
        $customWidth={props.$buttonWidth}
        $mTop={props.$mTop}
        $mBottom={props.$mBottom}
        white={props.white}
        onClick={props.onClick}
      >
        {props.text}
      </StyledButton>
    </StyledLink>
  );
}
