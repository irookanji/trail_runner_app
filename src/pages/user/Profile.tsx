import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../redux/userReducer';

export default function Profile() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userState.user);
  function logout() {
    localStorage.removeItem('token');
    dispatch(saveUser({
      isLoggedIn: false,
      username: '',
      email: '',
    }));
    history('/sign-in');
    history(0);
  }
  return (
    <Container sx={{ height: '50rem', padding: '2rem' }}>
      PROFILE
      <Typography>Username: {user.username}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>First name: {user.firstname}</Typography>
      <Typography>Last name: {user.lastname}</Typography>
      <Button color="error" variant="contained" onClick={() => logout()}>Logout</Button>
    </Container>
  );
}
