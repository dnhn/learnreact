import React from 'react';
import { repoUrl } from '../commons/constants';

import './GitHubMark.scss';

import mark from '../static/images/github-mark.svg';
import markLight from '../static/images/github-mark-light.svg';

export default ({ toggle }) => (
  <a
    href={repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="logo"
  >
    <img src={toggle ? mark : markLight} alt="Hosted by GitHub" />
  </a>
);
