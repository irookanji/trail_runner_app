/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  Box, Typography, CssBaseline,
} from '@mui/material';
import {
  Formik, Form, Field,
} from 'formik';
import { TextField, Checkbox } from 'formik-mui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { FormWrapper, FieldStyled, Label } from './styles';
import { addProduct } from '../../requests';
import AdminNavigation from '../../components/molecules/AdminNavigation/AdminNavigation';

interface initialValuesTypes {
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  material: string;
  size: string;
  color: string;
  rating: number;
  men: boolean;
  women: boolean;
  inventory: number;
}

export default function AddProduct() {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValues: initialValuesTypes = {
    image: '',
    title: '',
    description: '',
    price: 0,
    discount: 0,
    material: '',
    size: '',
    color: '',
    rating: 0,
    men: false,
    women: false,
    inventory: 0,
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminNavigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">Add product</Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            setLoading(true);
            addProduct(values).then(() => {
              setLoading(false);
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
              <LoadingButton loading={loading} variant="contained" type="submit">Submit</LoadingButton>
            </FormWrapper>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
