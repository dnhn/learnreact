export const UPDATE_SELECTED_PHOTO = 'UPDATE_SELECTED_PHOTO';
export const CLEAR_SELECTED_PHOTO = 'CLEAR_SELECTED_PHOTO';
export const OPEN_ABOUT = 'OPEN_ABOUT';
export const CLOSE_ABOUT = 'CLOSE_ABOUT';
export const GET_PHOTOS = 'GET_PHOTOS';

export const getPhotos = photos => ({
  type: GET_PHOTOS,
  photos,
});

export const openPhoto = selectedPhoto => ({
  type: UPDATE_SELECTED_PHOTO,
  selectedPhoto,
});

export const closePhoto = () => ({ type: CLEAR_SELECTED_PHOTO });

export const openAbout = () => ({ type: OPEN_ABOUT });

export const closeAbout = () => ({ type: CLOSE_ABOUT });
