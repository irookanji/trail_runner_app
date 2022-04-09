import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  CssBaseline,
  Typography,
} from '@mui/material';
import { getAllProducts } from '../../requests';
import AdminNavigation from '../../components/molecules/AdminNavigation/AdminNavigation';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const request = async () => {
    const response = await getAllProducts();
    setProducts(response);
    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      <CssBaseline />
      <AdminNavigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">Dashboard</Typography>
        {loading ? <CircularProgress /> : (
          <Box>
            <Typography>
              Products in database:
              {' '}
              {products.length}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
