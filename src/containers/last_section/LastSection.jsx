import React from 'react';
import { Box } from '@mui/material';
import CustomButton from '../../components/atoms/Button/CustomButton';
import { Link } from 'react-router-dom';
import { Container, Title, Description, StyledTextField, SignedAlertText, NotePolicyText } from './styles';

const LastSection = () => {
  const [signed, setSigned] = React.useState(true);

  return (
    <>
      <Container>
        <Title variant="h2">Want First Dibs?</Title>
        <Description variant="h5">
          Join our email list and be the first to know about new limited edition products, material innovations, and
          lots of other fun updates.
        </Description>
        {signed ? (
          <Box sx={{ mt: '2rem' }}>
            <StyledTextField
              id="standard-basic"
              label="Enter Your Email Address"
              variant="standard"
            />
            <Link to="#" onClick={() => setSigned(false)}>
              <CustomButton
                $textColor="white"
                $bgColor="#212A2F"
                $hoverColor="grey"
                $customWidth="111px"
                link="/"
                text="SIGN IN"
              />
            </Link>
          </Box>
        ) : (
          <SignedAlertText>You were successfully signed!</SignedAlertText>
        )}
        <NotePolicyText variant="h7">
          Note: You can opt-out at any time. See our Privacy Policy and Terms
        </NotePolicyText>
      </Container>
    </>
  );
};

export default LastSection;
