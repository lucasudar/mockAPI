export interface ITodosState {
  todos: any[],
  loading: boolean,
  errors: string | null
  page: number,
  limit: number
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface IFetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS
}

interface IFetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS,
  payload: any[]
}

interface IFetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR,
  payload: string
}

interface ISetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: number
}

export type ITodoAction = IFetchTodosAction | IFetchTodosSuccessAction | IFetchTodosErrorAction | ISetTodoPageAction;