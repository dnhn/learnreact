import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import app from './reducers';

const defaultState = {
  selectedPhoto: null,
  aboutVisibility: false,
};

const logger = createLogger({
  titleFormatter: (action, time, took) =>
    `${action.type} @ ${time} (${took.toFixed(2)} ms)`,
});

export default createStore(
  app,
  defaultState,
  applyMiddleware(logger),
);
