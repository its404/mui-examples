import {
  IMessageState,
  initialMessageState,
  messageReducer,
} from "app/redux/reducers/MessageReducer";
import {
  ITodoState,
  todoInitialState,
  todoReducer,
} from "app/redux/reducers/TodoReducer";
import { combineReducers } from "redux";

export default combineReducers<IRootState>({
  todoList: todoReducer,
  message: messageReducer,
});

export interface IRootState {
  todoList: ITodoState;
  message: IMessageState;
}

export const initialState: IRootState = {
  todoList: todoInitialState,
  message: initialMessageState,
};
