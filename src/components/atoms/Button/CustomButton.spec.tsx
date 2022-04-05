/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomButton from './CustomButton';

test('Button rendered as expected', () => {
  const component = renderer.create(
    <Router>
      <CustomButton link="/" text="Button" />
    </Router>,
  );
  const tree = component.toJSON();
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
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
