import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import { Container, Title, SectionsContainer, SectionLink, FeaturedContainer, FeaturedSectionLink } from './styles';

const NewArrivalsContent = () => {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3}>
          <Title component="div">Shoes</Title>
          <SectionsContainer>
            <SectionLink>Running Shoes</SectionLink>
            <SectionLink>Everyday Trainers</SectionLink>
            <SectionLink>Flats</SectionLink>
            <SectionLink>Rain Repellent Trainers</SectionLink>
            <SectionLink>Slip-Ons</SectionLink>
            <SectionLink>High Tops</SectionLink>
          </SectionsContainer>
        </Grid>

        <Grid item xs={12} md={3}>
          <Title component="div">Apparel</Title>
          <SectionsContainer>
            <SectionLink>Sweatshirts & Sweatpants</SectionLink>
            <SectionLink>Activewear</SectionLink>
            <SectionLink>Tees & Tops</SectionLink>
            <SectionLink>Bottoms</SectionLink>
            <SectionLink>Sweaters</SectionLink>
            <SectionLink>Underwear</SectionLink>
            <SectionLink>Socks</SectionLink>
          </SectionsContainer>
        </Grid>

        <Grid item xs={12} md={3}>
          <Title component="div">Accessories</Title>
          <SectionsContainer>
            <SectionLink>Hats & Scarves</SectionLink>
            <SectionLink>Face Masks</SectionLink>
            <SectionLink>Lace Kits</SectionLink>
            <SectionLink>Insoles</SectionLink>
            <SectionLink>Digital Gift Cards</SectionLink>
          </SectionsContainer>
        </Grid>
        <Grid item xs={12} md={3}>
          <Title component="div">Featured</Title>
          <SectionsContainer>
            <Link to="/men">
              <FeaturedContainer>
                <FeaturedSectionLink>Shop kits for him</FeaturedSectionLink>
              </FeaturedContainer>
            </Link>
            <Link to="/women">
              <FeaturedContainer featuredBg="#DCB224" hoverBoxShadow="11px 8px 23px 0px rgba(34, 60, 80, 0.2)">
                <FeaturedSectionLink>Shop kits for her</FeaturedSectionLink>
              </FeaturedContainer>
            </Link>
          </SectionsContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewArrivalsContent;
