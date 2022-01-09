import React from "react";
import { ButtonContainer, Title, SubTitle, ImageCover } from "./styles";
import CustomButton from "../Button/CustomButton.jsx";

export default function CustomSection(props) {
  return (
    <>
      <ImageCover $cover={props.coverImage}></ImageCover>
      <Title
        textColor={props.textColor}
        customWidth={props.customWidth}
        mTop={props.mTop}
        mBottom={props.mBottom}
        bgColor={props.bgColor}
        hoverColor={props.hoverColor}
      >
        {props.titleText}
      </Title>
      <SubTitle>{props.subTitleText}</SubTitle>

      <ButtonContainer>
        <CustomButton
          customWidth={props.buttonWidth}
          textColor="white"
          bgColor="#212A2F"
          hoverColor="grey"
          link="/men"
          text="Shop Men"
        />
        <CustomButton
          customWidth={props.buttonWidth}
          textColor="white"
          bgColor="#212A2F"
          hoverColor="grey"
          link="/women"
          text="Shop Women"
        />
      </ButtonContainer>
    </>
  );
}
