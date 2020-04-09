import React from 'react';
import { render } from '@testing-library/react';
import GitHubMark from '../GitHubMark';

const rootUrl = 'http://localhost/';

it('renders correctly', () => {
  const { container } = render(<GitHubMark />);
  expect(container).toMatchSnapshot();
  expect(container.getElementsByTagName('img')[0].src)
    .toBe(`${rootUrl}github-mark-light.svg`);
});

it('toggles style', () => {
  const { container } = render(<GitHubMark toggle />);
  expect(container.getElementsByTagName('img')[0].src)
    .toBe(`${rootUrl}github-mark.svg`);
});
