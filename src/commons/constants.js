const API_KEY = '1e1e4d18ed4c9b69e055fc6cf470b4a38092774e8bbdf4bc0aa812bdb498080e';
export const API_URL = `https://api.unsplash.com/photos?client_id=${API_KEY}`;

export const actionTypes = {
  UPDATE_SELECTED_PHOTO: 'UPDATE_SELECTED_PHOTO',
  CLEAR_SELECTED_PHOTO: 'CLEAR_SELECTED_PHOTO',
  OPEN_ABOUT: 'OPEN_ABOUT',
  CLOSE_ABOUT: 'CLOSE_ABOUT',
  REQUEST_PHOTOS: 'REQUEST_PHOTOS',
  REQUEST_PHOTOS_ERROR: 'REQUEST_PHOTOS_ERROR',
  SAVE_PHOTOS: 'SAVE_PHOTOS',
};