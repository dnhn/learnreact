import { actionTypes } from '../../commons/constants';

const photosDefault = {
  list: [],
  requesting: false,
  error: null,
};

export default (state = photosDefault, { type, payload }) => {
  switch (type) {
    case actionTypes.REQUEST_PHOTOS:
      return {
        ...state,
        list: [],
        requesting: true,
        error: null,
      };
    case actionTypes.REQUEST_PHOTOS_ERROR:
      return {
        ...state,
        list: [],
        requesting: false,
        error: true,
      };
    case actionTypes.SAVE_PHOTOS:
      return {
        ...state,
        list: payload.photos,
        requesting: false,
        error: false,
      };
    default: return state;
  }
};
