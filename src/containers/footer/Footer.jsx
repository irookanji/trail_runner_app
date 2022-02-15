import * as React from 'react';

import { AppBar, Box, Typography, Grid, Icon } from '@mui/material';
import { footerData } from './FooterData';

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: '#212A2F',
        pl: '54px',
        pt: '72px',
        pb: '90px',
        color: '#FFFFFF',
        minHeight: '821px',
        width: '100%',
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              mb: '21px',
            }}
          >
            Help
          </Typography>
          <Box
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0.5px',
              mb: '1rem',
            }}
          >
            <Typography>1-888-963-8944</Typography>
            <Typography>1-814-251-9966 (Text)</Typography>
            <Typography>help@allbirds.com</Typography>
            <Typography>Returns/Exchanges</Typography>
            <Typography>FAQ/Contact Us</Typography>
            <Typography>Afterpay</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              mb: '21px',
            }}
          >
            Shop
          </Typography>
          <Box
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0.5px',
              mb: '1rem',
            }}
          >
            <Typography>Men's Shoes</Typography>
            <Typography>Women's Shoes</Typography>
            <Typography>Men's Apparel</Typography>
            <Typography>Women's Apparel</Typography>
            <Typography>Socks</Typography>
            <Typography>Gift Cards</Typography>
            <Typography>Download the Allbirds App</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              mb: '21px',
            }}
          >
            Company
          </Typography>
          <Box
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0.5px',
              mb: '119px',
            }}
          >
            <Typography>Our Stores</Typography>
            <Typography>Our Story</Typography>
            <Typography>Our Materials</Typography>
            <Typography>Sustainability</Typography>
            <Typography>Partnerships</Typography>
            <Typography>Product Testing</Typography>
            <Typography>Affiliates</Typography>
            <Typography>Bulk Orders</Typography>
            <Typography>Careers</Typography>
            <Typography>Press</Typography>
            <Typography>California Transparency Act</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          ></Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              mb: '21px',
            }}
          >
            Follow the Flock
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.5px',
              width: '293px',
            }}
          >
            Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep,
            too. #weareallbirds
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              mr: '10rem',
              cursor: 'pointer',
            }}
          >
            {footerData.map((item) => (
              <Icon key={item.icon} sx={{ display: 'flex', mr: '1rem' }} style={{ fontSize: 30 }}>
                <img src={`${item.icon}`} srcSet={`${item.icon}`} alt={item.title} />
              </Icon>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.5px',
              mt: '5rem',
            }}
          >
            © {new Date().getFullYear()} Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
