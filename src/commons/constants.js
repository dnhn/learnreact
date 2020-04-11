import { isProduction } from './utils';

const {
  REACT_APP_USER_API_URL,
  REACT_APP_USER_API_KEY,
} = process.env;

const API_ROOT = '/.netlify/functions';

export const apis = {
  PHOTOS: isProduction ?
    `${API_ROOT}/photos` :
    `${REACT_APP_USER_API_URL}${REACT_APP_USER_API_KEY}`,
};

export const actionTypes = {
  UPDATE_SELECTED_PHOTO: 'UPDATE_SELECTED_PHOTO',
  CLEAR_SELECTED_PHOTO: 'CLEAR_SELECTED_PHOTO',
  OPEN_ABOUT: 'OPEN_ABOUT',
  CLOSE_ABOUT: 'CLOSE_ABOUT',
  REQUEST_PHOTOS: 'REQUEST_PHOTOS',
  REQUEST_PHOTOS_ERROR: 'REQUEST_PHOTOS_ERROR',
  SAVE_PHOTOS: 'SAVE_PHOTOS',
};
