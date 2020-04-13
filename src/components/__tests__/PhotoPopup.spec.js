import React from 'react';
import { fireEvent, render } from "@testing-library/react";

import { PhotoPopup } from '../PhotoPopup';

let mockStore;

beforeAll(() => {
  jest.useFakeTimers();
});

beforeEach(() => {
  mockStore = {
    selectedPhoto: {
      description: 'description',
      urls: { regular: '#background' },
      user: {
        links: { html: '#link' },
        first_name: 'First',
        last_name: 'Last',
      },
    },
    closePhoto: jest.fn(),
  };
});

afterAll(() => {
  jest.useRealTimers();
});

describe('<PhotoPopup />', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<PhotoPopup {...mockStore} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has no description', () => {
    mockStore.selectedPhoto.description = '';
    const { container } = render(<PhotoPopup {...mockStore} />);
    expect(container.getElementsByTagName('em').length)
      .toBe(0);
  });

  it('has no first name', () => {
    mockStore.selectedPhoto.user.first_name = '';
    const { container } = render(<PhotoPopup {...mockStore} />);
    expect(
      container
        .getElementsByClassName('photo-popup__author-link')[0]
        .textContent
        .trim()
    )
      .toBe(mockStore.selectedPhoto.user.last_name);
  });

  it('has no last name', () => {
    mockStore.selectedPhoto.user.last_name = '';
    const { container } = render(<PhotoPopup {...mockStore} />);
    expect(
      container
        .getElementsByClassName('photo-popup__author-link')[0]
        .textContent
        .trim()
    )
      .toBe(mockStore.selectedPhoto.user.first_name);
  });

  it('closes on click', () => {
    const { getByText } = render(<PhotoPopup {...mockStore} />);
    fireEvent.click(getByText('Close'));
    expect(mockStore.closePhoto).toHaveBeenCalled();
  });
});
