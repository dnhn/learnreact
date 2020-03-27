import { combineReducers } from 'redux';
import {
  UPDATE_SELECTED_PHOTO,
  CLEAR_SELECTED_PHOTO,
  OPEN_ABOUT,
  CLOSE_ABOUT
} from './actions';

const selectedPhoto = (state = null, { type, selectedPhoto }) => {
  switch (type) {
    case UPDATE_SELECTED_PHOTO: return selectedPhoto;
    case CLEAR_SELECTED_PHOTO: return null;
    default: return state;
  }
};

const aboutVisibility = (state = false, { type }) => {
  switch (type) {
    case OPEN_ABOUT: return true;
    case CLOSE_ABOUT: return false;
    default: return state;
  }
};

const rootReducer = combineReducers({ selectedPhoto, aboutVisibility });

export default rootReducer;
