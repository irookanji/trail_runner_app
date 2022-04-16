import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password should be of minimum 4 characters length')
    .required('Password is required'),
});

export default validationSchema;
