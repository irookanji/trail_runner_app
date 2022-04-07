import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomButton from './CustomButton';

export default {
  component: CustomButton,
  title: 'Atoms/CustomButton',
  argTypes: { clickHandler: { action: 'clicked' } },
};

export function Template() {
  return (
    <Router>
      <CustomButton
        $buttonWidth="111px"
        link="/"
        text="Button"
      />
    </Router>
  );
}
