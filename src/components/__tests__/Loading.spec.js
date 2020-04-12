import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../Loading';

describe('<Loading />', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders error state', () => {
    const { container } = render(<Loading error />);
    expect(container.firstChild.classList.contains('error')).toBe(true);
  });
});
