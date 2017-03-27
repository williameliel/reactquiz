import React from 'react';

import Start from '../components/Start';
import Question from '../components/Question';

import renderer from 'react-test-renderer';

it('Question renders correctly', () => {
  const tree = renderer.create(
    <Question />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it('Start renders correctly', () => {
  const tree = renderer.create(
    <Start />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
