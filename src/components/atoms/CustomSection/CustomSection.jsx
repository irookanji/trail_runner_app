import React from 'react';
import { ButtonContainer, Title, SubTitle, ImageCover, ContentContainer } from './styles';
import CustomButton from '../Button/CustomButton.jsx';

export default function CustomSection(props) {
  return (
    <>
      <ImageCover $cover={props.coverImage} />
      <ContentContainer>
        <Title
          fontSizeTitle={props.fontSizeTitle}
          lineHeightTitle={props.lineHeightTitle}
          textColor={props.textColor}
          customWidth={props.customWidth}
          mTop={props.mTop}
          mBottom={props.mBottom}
          bgColor={props.bgColor}
          hoverColor={props.hoverColor}
        >
          {props.titleText}
        </Title>
        <SubTitle
          fontSizeSubTitle={props.fontSizeSubTitle}
          lineHeightSubTitle={props.lineHeightSubTitle}
          fontWeightSubTitle={props.fontWeightSubTitle}
        >
          {props.subTitleText}
        </SubTitle>

        <ButtonContainer>
          <CustomButton
            customWidth={props.buttonWidth}
            textColor="white"
            bgColor="#212A2F"
            hoverColor="grey"
            link="/men"
            text={props.buttonText}
          />
          {props.renderSecondButton 
          ? <CustomButton
            customWidth={props.buttonWidth}
            textColor="white"
            bgColor="#212A2F"
            hoverColor="grey"
            link="/women"
            text="Shop Women"
          />
          : null
        }
        </ButtonContainer>
      </ContentContainer>
    </>
  );
}
