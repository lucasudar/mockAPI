export interface IPhotosState {
  photos: any[],
  loading: boolean,
  errors: string | null
  page: number,
  limit: number
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = "FETCH_PHOTOS",
  FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
  FETCH_PHOTOS_ERROR = "FETCH_PHOTOS_ERROR",
  SET_PHOTOS_PAGE = "SET_PHOTOS_PAGE",
}

interface IFetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS
}

interface IFetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
  payload: any[]
}

interface IFetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
  payload: string
}

interface ISetPhotosPageAction {
  type: PhotosActionTypes.SET_PHOTOS_PAGE,
  payload: number
}

export type IPhotosAction = IFetchPhotosAction | IFetchPhotosSuccessAction | IFetchPhotosErrorAction | ISetPhotosPageAction;