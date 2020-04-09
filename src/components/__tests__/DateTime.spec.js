import React from 'react';
import { render } from '@testing-library/react';
import DateTime from '../DateTime';

xit('renders correctly', () => {
  const { asFragment } = render(<DateTime />);
  expect(asFragment()).toMatchSnapshot();
});
