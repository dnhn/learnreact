import { actionTypes, apis } from '../../commons/constants';

export const requestPhotos = () => ({
  type: actionTypes.REQUEST_PHOTOS,
});

const requestPhotosError = () => ({
  type: actionTypes.REQUEST_PHOTOS_ERROR,
});

const savePhotos = photos => ({
  type: actionTypes.SAVE_PHOTOS,
  payload: { photos },
});

export function getPhotos() {
  return async dispatch => {
    const response = await fetch(apis.PHOTOS).then(res => res.json());
    dispatch(!!response.errorMessage ? requestPhotosError() : savePhotos(response));
  };
}
