import * as React from 'react';
import { Box, Typography } from '@mui/material';
import NotFoundPic from '../assets/NotFoundPic.svg';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        my: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
      }}
    >
      <img src={NotFoundPic} alt="Page not found" />
      <Typography sx={{ mt: '7%', fontSize: '1.5rem' }}>Page Not Found ⍨</Typography>
    </Box>
  );
};

export default NotFound;
