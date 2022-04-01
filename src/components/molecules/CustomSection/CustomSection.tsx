/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  ButtonContainer, Title, SubTitle, ImageCover, ContentContainer, VideoContainer,
} from './styles';
import CustomButton from '../../atoms/Button/CustomButton';
import backgroundVideo from '../../../assets/backgroundVideo.mp4';

type Props = {
  coverImage?: string;
  $fontSizeTitle: string;
  $lineHeightTitle: string;
  titleText: string;
  $fontSizeSubTitle: string;
  $lineHeightSubTitle: string;
  $fontWeightSubTitle?: string;
  subTitleText: string;
  $xsCustomWidth?: string;
  $buttonWidth?: string;
  buttonLink?: string;
  buttonText: string;
  renderSecondButton: string | boolean;
}

export default function CustomSection({
  coverImage, $fontSizeTitle, $lineHeightTitle, titleText, $fontSizeSubTitle, $lineHeightSubTitle, $fontWeightSubTitle, subTitleText, $xsCustomWidth, $buttonWidth, buttonLink, buttonText, renderSecondButton,
}: Props) {
  return (
    <>
      {coverImage ? (
        <ImageCover $cover={coverImage} />
      ) : (
        <VideoContainer>
          <video autoPlay loop muted id="video" style={{ height: '100%', width: '100%', objectFit: 'cover' }}>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </VideoContainer>
      )}

      <ContentContainer>
        <Title
          $fontSizeTitle={$fontSizeTitle}
          $lineHeightTitle={$lineHeightTitle}
        >
          {titleText}
        </Title>
        <SubTitle
          $fontSizeSubTitle={$fontSizeSubTitle}
          $lineHeightSubTitle={$lineHeightSubTitle}
          $fontWeightSubTitle={$fontWeightSubTitle}
        >
          {subTitleText}
        </SubTitle>

        <ButtonContainer>
          <CustomButton
            $xsCustomWidth={$xsCustomWidth}
            $buttonWidth={$buttonWidth}
            $textColor="white"
            $bgColor="#212A2F"
            $hoverColor="grey"
            link={buttonLink || '/men'}
            text={buttonText}
          />
          {renderSecondButton ? (
            <CustomButton $textColor="white" $bgColor="#212A2F" $hoverColor="grey" link="/women" text="Shop Women" />
          ) : null}
        </ButtonContainer>
      </ContentContainer>
    </>
  );
}
