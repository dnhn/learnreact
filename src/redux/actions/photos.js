import { API_URL, actionTypes } from '../../commons/constants';

export const requestPhotos = () => ({
  type: actionTypes.REQUEST_PHOTOS,
});

const requestPhotosError = error => ({
  type: actionTypes.REQUEST_PHOTOS_ERROR,
  payload: { error },
});

const savePhotos = photos => ({
  type: actionTypes.SAVE_PHOTOS,
  payload: { photos },
});

export function getPhotos() {
  return dispatch => fetch(API_URL)
    .then(res => res.json())
    .then(data => data.errors && data.errors.length ?
      dispatch(requestPhotosError(data.errors)) :
      dispatch(savePhotos(data))
    );
}
