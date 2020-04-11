import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { About } from '../About';

const mockStore = {
  closeAbout: jest.fn(),
}

describe('<About />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('closes on click', () => {
    const { getByText } = render(<About {...mockStore} />);
    fireEvent.click(getByText('Close'));
    expect(mockStore.closeAbout).toHaveBeenCalled();
  });

  it('closes on backdrop click', () => {
    const { container } = render(<About {...mockStore} />);
    fireEvent.click(container.getElementsByClassName('about')[0]);
    expect(mockStore.closeAbout).toHaveBeenCalled();
  });
});
