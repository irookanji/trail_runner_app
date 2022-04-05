import React from 'react';
import cover from '../../assets/cover.jpg';
import CustomButton from '../../components/atoms/Button/CustomButton';

import {
  Title, SubTitle, ButtonContainer, ImageCover,
} from './styles';

function HeaderMUI() {
  return (
    <ImageCover $cover={cover}>
      <Title variant="h2">The Trail Runner SWT Is Here.</Title>

      <SubTitle variant="h5">Durable. Comfortable. Ready to get dirty.</SubTitle>

      <ButtonContainer>
        <CustomButton white="true" link="/men" text="Shop Men" />
        <CustomButton white="true" link="/women" text="Shop Women" />
      </ButtonContainer>
    </ImageCover>
  );
}

export default HeaderMUI;
