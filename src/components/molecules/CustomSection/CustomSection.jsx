import React from 'react';
import { ButtonContainer, Title, SubTitle, ImageCover, ContentContainer, VideoContainer } from './styles';
import CustomButton from '../../atoms/Button/CustomButton.tsx';
import backgroundVideo from '../../../assets/backgroundVideo.mp4';

export default function CustomSection(props) {
  return (
    <>
      {props.coverImage ? (
        <ImageCover $cover={props.coverImage} />
      ) : (
        <VideoContainer>
          <video autoPlay loop muted id="video" style={{ height: '100%', width: '100%', objectFit: 'cover' }}>
            <source src={backgroundVideo} preload="auto" type="video/mp4" />
          </video>
        </VideoContainer>
      )}

      <ContentContainer>
        <Title
          $fontSizeTitle={props.$fontSizeTitle}
          $lineHeightTitle={props.$lineHeightTitle}
          $textColor={props.$textColor}
          $customWidth={props.$customWidth}
          $mTop={props.$mTop}
          $mBottom={props.$mBottom}
          $bgColor={props.$bgColor}
          $hoverColor={props.$hoverColor}
        >
          {props.titleText}
        </Title>
        <SubTitle
          $fontSizeSubTitle={props.$fontSizeSubTitle}
          $lineHeightSubTitle={props.$lineHeightSubTitle}
          $fontWeightSubTitle={props.$fontWeightSubTitle}
        >
          {props.subTitleText}
        </SubTitle>

        <ButtonContainer>
          <CustomButton
            $xsCustomWidth={props.$xsCustomWidth}
            $buttonWidth={props.$buttonWidth}
            $textColor="white"
            $bgColor="#212A2F"
            $hoverColor="grey"
            link={props.buttonLink ? props.buttonLink : '/men'}
            text={props.buttonText}
          />
          {props.renderSecondButton ? (
            <CustomButton $textColor="white" $bgColor="#212A2F" $hoverColor="grey" link="/women" text="Shop Women" />
          ) : null}
        </ButtonContainer>
      </ContentContainer>
    </>
  );
}
