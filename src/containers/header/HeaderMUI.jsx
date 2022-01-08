import React from "react";
import cover from "../../assets/cover.jpg";
import CustomButton from "../../components/atoms/Button/CustomButton";

import { Title, SubTitle, ButtonContainer, ImageCover } from "./styles";

const HeaderMUI = () => {
  return (
    <>
      <ImageCover $cover={cover}>
        <Title variant="h2">The Trail Runner SWT Is Here.</Title>

        <SubTitle variant="h5">
          Durable. Comfortable. Ready to get dirty.
        </SubTitle>

        <ButtonContainer>
          <CustomButton link="/men" text="Shop Men" customWidth="180px" />
          <CustomButton link="/women" text="Shop Women" customWidth="180px" />
        </ButtonContainer>
      </ImageCover>
    </>
  );
};

export default HeaderMUI;
