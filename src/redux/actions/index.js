import { actionTypes } from '../../commons/constants';
export { requestPhotos, getPhotos } from './photos';

const openPhoto = selectedPhoto => ({
  type: actionTypes.UPDATE_SELECTED_PHOTO,
  selectedPhoto,
});

const closePhoto = () => ({ type: actionTypes.CLEAR_SELECTED_PHOTO });

const openAbout = () => ({ type: actionTypes.OPEN_ABOUT });

const closeAbout = () => ({ type: actionTypes.CLOSE_ABOUT });

export {
  openPhoto,
  closePhoto,
  openAbout,
  closeAbout,
};
