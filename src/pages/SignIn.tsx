import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Alert } from '@mui/material';
import validationSchema from '../utils/validationSchema';
import { getUserData, login } from '../requests';
import { saveUser } from '../redux/userReducer';

const theme = createTheme();

export default function SignIn() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState('');
  function get() {
    getUserData().then(user => {
      if (user.isLoggedIn) {
        dispatch(saveUser({ user }));
        history('/profile');
      }
    });
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
      login(values.username, values.password)
      .then((data: { token: string; message: string }) => {
        if (data.message === 'Invalid Username or Password') {
          setStatus('Invalid Username or Password');
        }
        localStorage.setItem('token', data.token);
        get();
      });
    },
  });

  const handleSubmit = (event: {
    preventDefault: () => void; currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mb: '4rem' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: '#212A2F' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {status === 'Invalid Username or Password' && <Alert severity="error">{status}</Alert>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Username"
              autoFocus
              autoComplete="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#212A2F',
                '&:hover': {
                  backgroundColor: 'rgb(219, 215, 215)',
                  color: '#white',
                },
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid
                item
                xs
                sx={{
                  color: '#212A2F',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link to="/">
                  Forgot password?
                </Link>
              </Grid>
              <Grid
                item
                sx={{
                  color: '#212A2F',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link to="/sign-up">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
