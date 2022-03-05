import React from 'react';
import { HeaderMUI } from '../templates';
import Favorites from '../components/molecules/favorites/Favorites';
import { slidesCollections } from '../components/atoms/Carousel/CarouselData/CollectionsData';
import { slidesNewArrival } from '../components/atoms/Carousel/CarouselData/NewArrivalsData';
import { slidesStories } from '../components/atoms/Carousel/CarouselData/StoriesData';
import CustomCarousel from '../components/atoms/Carousel/CustomCarousel';
import CustomSection from '../components/molecules/CustomSection/CustomSection';
import secondSectionCoverImage from '../assets/SecondCover.jpg';
import fourthSectionCoverImage from '../assets/FourthCover.jpg';

import { Box } from '@mui/material';
import CustomButton from '../components/atoms/Button/CustomButton';
import { Container, Title, Description, StyledTextField, SignedAlertText, NotePolicyText } from '../pages/styles';
import CustomCarouselNew from '../components/atoms/Carousel/CustomCarouselNew';

const Home = () => {
  const [signed, setSigned] = React.useState(true);
  return (
    <>
      <HeaderMUI />
      <Favorites />

      <CustomSection
        coverImage={secondSectionCoverImage}
        renderSecondButton={true}
        $fontSizeTitle="2rem"
        $lineHeightTitle="4rem"
        $fontSizeSubTitle="1.5rem"
        $lineHeightSubTitle="2.5rem"
        buttonText="Shop Men"
        titleText="Seasons Change. Your Shoes Don’t Have To."
        subTitleText="Soft and cozy wool shoes to keep you comfortable all year round."
      />

      <CustomCarouselNew slides={slidesCollections} titleText="Shop The Collections" />

      <CustomSection
        renderSecondButton={false}
        $xsCustomWidth="210px"
        $buttonWidth="384px"
        $fontSizeTitle="2rem"
        $fontWeightSubTitle="normal"
        $lineHeightTitle="4rem"
        $fontSizeSubTitle="1.5rem"
        $lineHeightSubTitle="2.5rem"
        buttonText="See How"
        buttonLink="/see-how"
        titleText="Made From Nature, For Nature"
        subTitleText="We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our
        best chance for a sustainable future."
      />
      <CustomCarousel slides={slidesNewArrival} titleText="New Arrivals" />

      <CustomSection
        coverImage={fourthSectionCoverImage}
        renderSecondButton={false}
        $xsCustomWidth="210px"
        $buttonWidth="384px"
        $fontSizeTitle="2rem"
        $fontWeightSubTitle="normal"
        $lineHeightTitle="4rem"
        $fontSizeSubTitle="1.5rem"
        $lineHeightSubTitle="2.5rem"
        buttonText="OUR SUSTAINABLE PRACTICES"
        buttonLink="/sustainable-practices"
        titleText="Reversing Climate Change Through Better Business"
        subTitleText="Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further.
        Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025."
      />
      <CustomCarousel slides={slidesStories} titleText="Stories" />
      <Container>
        <Title variant="h2">Want First Dibs?</Title>
        <Description variant="h5">
          Join our email list and be the first to know about new limited edition products, material innovations, and
          lots of other fun updates.
        </Description>
        {signed ? (
          <Box sx={{ mt: '2rem' }}>
            <StyledTextField id="standard-basic" label="Enter Your Email Address" variant="standard" />
            <CustomButton
              to="#"
              onClick={() => setSigned(false)}
              $textColor="white"
              $bgColor="#212A2F"
              $hoverColor="grey"
              $customWidth="111px"
              link="/"
              text="SIGN IN"
            />
          </Box>
        ) : (
          <SignedAlertText>You were successfully signed!</SignedAlertText>
        )}
        <NotePolicyText variant="h7">
          Note: You can opt-out at any time. See our Privacy Policy and Terms
        </NotePolicyText>
      </Container>
    </>
  );
};

export default Home;
