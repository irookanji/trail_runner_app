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
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavigation from '../../components/molecules/AdminNavigation/AdminNavigation';
import { deleteProduct, getAllProducts } from '../../requests';
import { Thumbnail } from '../styles';

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
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Details</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Storage</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product: any) => (
                <TableRow
                  key={product.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ width: '100px' }} padding="none" component="th" scope="row">
                    <Thumbnail alt={product.title} src={product.image} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6"><strong>Title:</strong> {product.title}</Typography>
                    <Typography sx={{ display: 'block' }} variant="caption"><strong>Material:</strong> {product.material}</Typography>
                    <Typography sx={{ display: 'block' }} variant="caption"><strong>Color:</strong> {product.color}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: '200px' }} align="right" component="th" scope="row">
                    <Typography>&euro;{product.price}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: '200px' }} align="right" component="th" scope="row">
                    <Typography>{product.inventory}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{ mb: '10px', minWidth: '82px' }}
                      onClick={() => history(`/edit-product/${product.id}`)}
                      variant="contained"
                      color="info"
                    >
                      Edit
                    </Button>
                    <Tooltip title="Really?" followCursor>
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
                    </Tooltip>

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
