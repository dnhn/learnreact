import { combineReducers } from 'redux';
import { actionTypes } from '../../commons/constants';
import photos from './photos';

const selectedPhoto = (state = null, { type, selectedPhoto }) => {
  switch (type) {
    case actionTypes.UPDATE_SELECTED_PHOTO: return selectedPhoto;
    case actionTypes.CLEAR_SELECTED_PHOTO: return null;
    default: return state;
  }
};

const aboutVisibility = (state = false, { type }) => {
  switch (type) {
    case actionTypes.OPEN_ABOUT: return true;
    case actionTypes.CLOSE_ABOUT: return false;
    default: return state;
  }
};

const rootReducer = combineReducers({
  photos,
  selectedPhoto,
  aboutVisibility,
});

export default rootReducer;
