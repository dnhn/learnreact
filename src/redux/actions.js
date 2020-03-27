export const UPDATE_SELECTED_PHOTO = 'UPDATE_SELECTED_PHOTO';
export const CLEAR_SELECTED_PHOTO = 'CLEAR_SELECTED_PHOTO';
export const OPEN_ABOUT = 'OPEN_ABOUT';
export const CLOSE_ABOUT = 'CLOSE_ABOUT';
export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const REQUEST_PHOTOS_ERROR = `${REQUEST_PHOTOS}_ERROR`;
export const SAVE_PHOTOS = 'SAVE_PHOTOS';

export const requestPhotos = () => ({
  type: REQUEST_PHOTOS,
});

const requestPhotosError = error => ({
  type: REQUEST_PHOTOS_ERROR,
  payload: { error },
});

const savePhotos = photos => ({
  type: SAVE_PHOTOS,
  payload: { photos },
});

export function getPhotos() {
  const apiKey = '1e1e4d18ed4c9b69e055fc6cf470b4a38092774e8bbdf4bc0aa812bdb498080e';
  const url = `https://api.unsplash.com/photos?client_id=${apiKey}`;

  return dispatch => fetch(url)
    .then(res => res.json())
    .then(data => data.errors && data.errors.length ?
      dispatch(requestPhotosError(data.errors)) :
      dispatch(savePhotos(data))
    );
}

export const openPhoto = selectedPhoto => ({
  type: UPDATE_SELECTED_PHOTO,
  selectedPhoto,
});

export const closePhoto = () => ({ type: CLEAR_SELECTED_PHOTO });

export const openAbout = () => ({ type: OPEN_ABOUT });

export const closeAbout = () => ({ type: CLOSE_ABOUT });
