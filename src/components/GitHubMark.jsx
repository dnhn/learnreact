import React from 'react';

import './GitHubMark.scss';

import mark from '../static/images/github-mark.svg';
import markLight from '../static/images/github-mark-light.svg';

export default ({ toggle }) => (
  <a
    href="https://github.com/nhantdn/learnreact"
    target="_blank"
    rel="noopener noreferrer"
    className="logo"
  >
    <img src={toggle ? mark : markLight} alt="" />
  </a>
);
