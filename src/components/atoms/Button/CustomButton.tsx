/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { StyledButton, StyledLink } from './styles';

type Props = {
  link: string;
  $xsCustomWidth?: string;
  $buttonWidth?: string;
  $mTop?: string;
  $mBottom?: string;
  white?: boolean | string;
  onClick?: () => void;
  text?: string;
  $textColor?: string;
  $bgColor?: string;
  $hoverColor?: string;
}

export default function CustomButton({
  link, $xsCustomWidth, $buttonWidth, $mTop, $mBottom, white, onClick, text,
}: Props) {
  return (
    <StyledLink to={link}>
      <StyledButton
        $xsCustomWidth={$xsCustomWidth}
        $customWidth={$buttonWidth}
        $mTop={$mTop}
        $mBottom={$mBottom}
        white={white}
        onClick={onClick}
      >
        {text}
      </StyledButton>
    </StyledLink>
  );
}
