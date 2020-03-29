import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux';

import Home from './components/Home';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
