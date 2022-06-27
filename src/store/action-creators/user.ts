import {IUserAction, UserActionTypes} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS});
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'});
    }
  }
}
