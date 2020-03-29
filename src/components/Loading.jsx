import React from 'react';

import './Loading.scss';

export default ({ error }) =>
  <div className={`loading ${error ? 'error' : ''}`}>
    <span className="dot first" />
    <span className="dot second" />
    <span className="dot last" />
  </div>;
