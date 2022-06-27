import {ITodoAction, ITodosState, TodoActionTypes} from "../../types/todos";

const initialState: ITodosState = {
  todos: [],
  loading: false,
  errors: null,
  page: 1,
  limit: 10
}

export const todoReducer = (state = initialState, action: ITodoAction): ITodosState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true,
      }

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      }

    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }

    case TodoActionTypes.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload,
      }

    default:
      return state;
  }
}