import {IPhotosAction, IPhotosState, PhotosActionTypes} from "../../types/photos";

const initialState: IPhotosState = {
  photos: [],
  loading: false,
  errors: null,
  page: 1,
  limit: 10
}

export const photosReducer = (state = initialState, action: IPhotosAction) => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS:
      return {
        ...state,
        loading: true
      }

    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        loading: false
      }

    case PhotosActionTypes.FETCH_PHOTOS_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }

    case PhotosActionTypes.SET_PHOTOS_PAGE:
      return {
        ...state,
        page: action.payload
      }
      
    default:
      return state;
  }
}