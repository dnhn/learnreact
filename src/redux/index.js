import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers';
import middleware from './middlewares';

const preloadedState = {
  photos: {
    list: [],
    requesting: false,
    error: null,
  },
  selectedPhoto: null,
  aboutVisibility: false,
};

export default configureStore({
  reducer: rootReducers,
  preloadedState,
  middleware,
  devTools: false,
});
