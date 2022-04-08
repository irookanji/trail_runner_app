import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import CustomButton from '../components/atoms/Button/CustomButton';
import { GMCard, AboutSubTitle } from './styles';

function About() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        my: '6rem',
      }}
    >
      <Typography
        gutterBottom
        sx={{
          mb: '2rem',
          fontSize: '3rem',
          lineHeight: '1.31',
          letterSpacing: '.5px',
        }}
      >
        How Can We Help?
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: '1.5rem' }}>
        Monday - Friday: 9:00 - 17:00 GMT
      </Typography>
      <Typography variant="h6" gutterBottom>
        Send us a message:
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: '1.5rem' }}>
        irookanji@gmail.com
      </Typography>
      <CustomButton
        link="#"
        text="Get In Touch"
        $buttonWidth="260px"
      />
      <AboutSubTitle>Technologies were used:</AboutSubTitle>
      <Box sx={{ display: 'flex', mt: '1rem' }}>
        <Stack spacing={2} sx={{ mr: '2rem' }}>
          <GMCard>React JS</GMCard>
          <GMCard>Redux (Redux-Toolkit)</GMCard>
          <GMCard>Typescript</GMCard>
          <GMCard>Axios</GMCard>
          <GMCard>React Router Dom</GMCard>
        </Stack>
        <Stack spacing={2}>
          <GMCard>Formik / Yup</GMCard>
          <GMCard>MUI (Material UI)</GMCard>
          <GMCard>Styled Components</GMCard>
          <GMCard>Storybook</GMCard>
          <GMCard>Jest</GMCard>
        </Stack>
      </Box>
    </Container>
  );
}

export default About;
