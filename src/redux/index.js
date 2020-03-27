import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import app from './reducers';

const defaultState = {
  photos: [],
  selectedPhoto: null,
  aboutVisibility: false,
};

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({
    titleFormatter: (action, time, took) =>
      `${action.type} @ ${time} (${took.toFixed(2)} ms)`,
  }));
}

export default createStore(
  app,
  defaultState,
  applyMiddleware(...middlewares),
);
