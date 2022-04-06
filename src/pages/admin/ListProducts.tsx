import {
  Box,
  Typography,
  TableContainer,
  Paper,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Button,
  CssBaseline,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavigation from '../../components/molecules/AdminNavigation/AdminNavigation';
import { deleteProduct, getAllProducts } from '../../requests';

export default function ListProducts() {
  const history = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const request = async () => {
    const response = await getAllProducts();
    setProducts(response);
  };

  useEffect(() => {
    request();
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminNavigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">List products</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product: any) => (
                <TableRow
                  key={product.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.title}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{ marginRight: '10px' }}
                      onClick={() => history(`/edit-product/${product.id}`)}
                      variant="contained"
                      color="info"
                    >
                      Edit
                    </Button>
                    <LoadingButton
                      loading={loading}
                      onClick={() => {
                        setLoading(true);
                        deleteProduct(product.id).then(() => {
                          setLoading(false);
                          history(0);
                        });
                      }}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </LoadingButton>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
