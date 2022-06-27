import {Dispatch} from "redux";
import {IPhotosAction, PhotosActionTypes} from "../../types/photos";
import axios from "axios";


export const fetchPhotos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<IPhotosAction>) => {
    try {
      dispatch({type: PhotosActionTypes.FETCH_PHOTOS});
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          _page: page,
          _limit: limit
        }
      });
      dispatch({type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({type: PhotosActionTypes.FETCH_PHOTOS_ERROR, payload: 'Произошла ошибка при загрузке фотографий'});
    }
  }
}

export const setPhotosPage = (page: number): IPhotosAction => {
  return {
    type: PhotosActionTypes.SET_PHOTOS_PAGE,
    payload: page
  }
}