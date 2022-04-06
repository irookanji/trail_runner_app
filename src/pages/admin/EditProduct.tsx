import {
  Box, Typography, CircularProgress, CssBaseline,
} from '@mui/material';
import {
  Formik, Form, Field,
} from 'formik';
import { TextField, Checkbox } from 'formik-mui';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { FormWrapper, FieldStyled, Label } from './styles';
import { getProduct, updateProduct } from '../../requests';
import AdminNavigation from '../../components/molecules/AdminNavigation/AdminNavigation';

export default function EditProduct() {
  const history = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const request = async () => {
    const response = await getProduct(productId);
    setProduct(response);
    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminNavigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">
          Edit product
        </Typography>
        {loading ? <CircularProgress /> : (
          <Formik
            initialValues={product}
            onSubmit={(values) => {
              setButtonLoading(true);
              updateProduct(productId, values).then(() => {
                setButtonLoading(false);
                history('/list-products');
              });
            }}
          >
            <Form>
              <FormWrapper>
                <Label>Image</Label>
                <FieldStyled component={TextField} name="image" />
                <Label>Title</Label>
                <FieldStyled component={TextField} name="title" />
                <Label>Description</Label>
                <FieldStyled component={TextField} name="description" />
                <Label>Price</Label>
                <FieldStyled component={TextField} type="number" name="price" />
                <Label>Discount</Label>
                <FieldStyled component={TextField} type="number" name="discount" />
                <Label>Material</Label>
                <FieldStyled component={TextField} name="material" />
                <Label>Size</Label>
                <FieldStyled component={TextField} name="size" />
                <Label>Color</Label>
                <FieldStyled component={TextField} name="color" />
                <Label>Rating</Label>
                <FieldStyled component={TextField} type="number" name="rating" />
                <Label>Inventory</Label>
                <FieldStyled component={TextField} type="number" name="inventory" />
                <Box>
                  <Field component={Checkbox} type="checkbox" name="men" />
                  {' '}
                  Men
                  <Field component={Checkbox} type="checkbox" name="women" />
                  {' '}
                  Women
                </Box>
                <LoadingButton loading={buttonLoading} variant="contained" type="submit">Update</LoadingButton>
              </FormWrapper>
            </Form>
          </Formik>
        )}
      </Box>
    </Box>
  );
}
