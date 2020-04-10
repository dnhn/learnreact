import React from 'react';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';

import { Home } from '../Home';

let mockStore = {};

beforeEach(() => {
  mockStore = {
    selectedPhoto: null,
    photos: {
      requesting: false,
      error: false,
      list: [],
    },
    requestPhotos: jest.fn(),
    getPhotos: jest.fn(),
  };
});

describe('<Home />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Home {...mockStore} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('makes requests', () => {
    render(<Home {...mockStore} />);
    expect(mockStore.requestPhotos).toHaveBeenCalled();
    expect(mockStore.getPhotos).toHaveBeenCalled();
  });

  it('loading photos', () => {
    mockStore.photos.requesting = true;
    const { baseElement } = render(<Home {...mockStore} />);
    expect(
      baseElement
        .getElementsByClassName('loading')
        .length
    )
      .toBe(1);
  });

  it('failed loading photos', () => {
    mockStore.photos.error = true;
    const { baseElement } = render(<Home {...mockStore} />);
    expect(
      baseElement
        .getElementsByClassName('loading')[0]
        .classList
        .contains('error')
    )
      .toBe(true);
  });

  it('opens about popup', async () => {
    const { container, getByText } = render(<Home {...mockStore} />);
    fireEvent.click(getByText('About'));
    waitForDomChange(container).then(
      () => expect(container.getElementsByClassName('about').length)
        .toBe(1)
    );
  });
});
