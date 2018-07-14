import React from 'react';
import renderer from 'react-test-renderer';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);

import App from './App';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
