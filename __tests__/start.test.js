import React from 'react';
import Start from '../src/components/Start';
import renderer from 'react-test-renderer';

it('Start renders correctly', () => {
  const tree = renderer.create(
    <Start />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
