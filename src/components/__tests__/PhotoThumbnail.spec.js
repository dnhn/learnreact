import React from 'react';
import { fireEvent, render } from "@testing-library/react";

import { PhotoThumbnail } from '../PhotoThumbnail';

let mockStore = {};

beforeEach(() => {
  mockStore = {
    data: {
      links: { html: '#link' },
      urls: { small: '#background' },
      description: 'description',
    },
    openPhoto: jest.fn(),
  };
});

describe('<PhotoThumbnail />', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<PhotoThumbnail {...mockStore} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has blank description', () => {
    mockStore.data.description = '';
    const { container } = render(<PhotoThumbnail {...mockStore} />);
    expect(container.getElementsByClassName('photo__desc').length)
      .toBe(0);
  });

  it('is clicked', () => {
    const { container } = render(<PhotoThumbnail {...mockStore} />);
    fireEvent.click(container.getElementsByClassName('photo')[0]);
    expect(mockStore.openPhoto).toHaveBeenCalled();
  });
});
