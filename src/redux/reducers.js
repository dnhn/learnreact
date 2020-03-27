import { combineReducers } from 'redux';
import {
  UPDATE_SELECTED_PHOTO,
  CLEAR_SELECTED_PHOTO,
  OPEN_ABOUT,
  CLOSE_ABOUT,
  REQUEST_PHOTOS,
  REQUEST_PHOTOS_ERROR,
  SAVE_PHOTOS,
} from './actions';

const photosDefault = {
  list: [],
  requesting: false,
  error: null,
};

const photos = (state = photosDefault, { type, payload }) => {
  switch (type) {
    case REQUEST_PHOTOS:
      return {
        ...state,
        list: [],
        requesting: true,
        error: null,
      };
    case REQUEST_PHOTOS_ERROR:
      return {
        ...state,
        list: [],
        requesting: false,
        error: payload.error,
      };
    case SAVE_PHOTOS:
      return {
        ...state,
        list: payload.photos,
        requesting: false,
        error: false,
      };
    default: return state;
  }
};

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

const rootReducer = combineReducers({
  photos,
  selectedPhoto,
  aboutVisibility,
});

export default rootReducer;
