import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {photosReducer} from "./photosReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  photo: photosReducer
})

export type RootState = ReturnType<typeof rootReducer>;