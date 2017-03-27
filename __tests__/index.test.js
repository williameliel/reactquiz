import React from 'react';

import Start from '../src/components/Start';
import Question from '../src/components/Question';
import Choices from '../src/components/choices';

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

it('Choices renders correctly', () => {
  const tree = renderer.create(
    <Choices choices={{'question': 'a' }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
