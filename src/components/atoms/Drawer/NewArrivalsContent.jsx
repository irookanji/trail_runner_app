import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Container, Title, SectionsContainer, SectionLink, FeaturedContainer, FeaturedSectionLink } from './styles';
import { v4 as uuidv4 } from 'uuid';

const ShoesList = ['Running Shoes', 'Everyday Trainers', 'Flats', 'Rain Repellent Trainers', 'Slip-Ons', 'High Tops'];

const ApparelList = [
  'Sweatshirts & Sweatpants',
  'Activewear',
  'Tees & Tops',
  'Bottoms',
  'Sweaters',
  'Underwear',
  'Socks',
];

const AccessorieslList = ['Hats & Scarves', 'Face Masks', 'Lace Kits', 'Insoles', 'Digital Gift Cards'];

const NewArrivalsContent = () => {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3}>
          <Title component="div">Shoes</Title>
          <SectionsContainer>
            {ShoesList.map((item) => (
              <SectionLink key={uuidv4()}>{item}</SectionLink>
            ))}
          </SectionsContainer>
        </Grid>

        <Grid item xs={12} md={3}>
          <Title component="div">Apparel</Title>
          <SectionsContainer>
            {ApparelList.map((item) => (
              <SectionLink key={uuidv4()}>{item}</SectionLink>
            ))}
          </SectionsContainer>
        </Grid>

        <Grid item xs={12} md={3}>
          <Title component="div">Accessories</Title>
          <SectionsContainer>
            {AccessorieslList.map((item) => (
              <SectionLink key={uuidv4()}>{item}</SectionLink>
            ))}
          </SectionsContainer>
        </Grid>

        <Grid item xs={12} md={3}>
          <Title component="div">Featured</Title>
          <SectionsContainer>
            <Link to="/men">
              <FeaturedContainer component="div">
                <FeaturedSectionLink>Shop kits for him</FeaturedSectionLink>
              </FeaturedContainer>
            </Link>
            <Link to="/women">
              <FeaturedContainer
                component="div"
                $featuredBg="#DCB224"
                $hoverBoxShadow="11px 8px 23px 0px rgba(34, 60, 80, 0.2)"
              >
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
