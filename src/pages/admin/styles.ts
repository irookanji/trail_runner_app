import styled from 'styled-components';
import { Box } from '@mui/material';
import { Field } from 'formik';

// eslint-disable-next-line import/prefer-default-export
export const FormWrapper = styled(Box)`
  width: 700px;
`;

export const FieldStyled = styled(Field)`
  width: 45%;
  margin: 0px 8px 16px 8px;
`;

export const Label = styled(Box)`
  margin: 0 8px;
  width: 45%;
`;
