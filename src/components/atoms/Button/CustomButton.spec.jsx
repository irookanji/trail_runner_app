import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from './CustomButton';
import { BrowserRouter as Router } from 'react-router-dom';

test('Button rendered as expected', () => {
  const component = renderer.create(
    <Router>
      <CustomButton link="/">Button text</CustomButton>
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button rendered as expected with props params', () => {
  const params = {
    link: '/',
    white: true,
  };
  const component = renderer.create(
    <Router>
      <CustomButton {...params}>Button text</CustomButton>
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
