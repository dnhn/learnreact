import { createStore } from 'redux';
import app from './reducers';

const defaultState = {
  selectedPhoto: null,
  aboutVisibility: false,
};

export default createStore(
  app,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
