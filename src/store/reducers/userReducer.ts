import {IUserAction, IUserState, UserActionTypes} from "../../types/users";

const initialState: IUserState = {
  users: [],
  loading: false,
  errors: null
}

export const userReducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        users: [],
        errors: null
      }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errors: null
      }
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        errors: action.payload
      }
    default:
      return state;
  }
}