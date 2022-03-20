import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomButton from './CustomButton';

export default {
  component: CustomButton,
  title: 'Atoms/CustomButton',
  argTypes: { clickHandler: { action: 'clicked' } },
};

export const Template = () => {
  return (
    <Router>
      <CustomButton
        to="#"
        $textColor="white"
        $bgColor="#212A2F"
        $hoverColor="grey"
        $customWidth="111px"
        link="/"
        text="Button"
      />
    </Router>
  );
};
