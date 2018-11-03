import IMessage from "app/models/IMessage";
import { Action, MessageActionTypes } from "app/redux/actions/MessageAction";

export interface IMessageState {
  message: IMessage;
}

export const initialMessageState: IMessageState = {
  message: {
    messageType: "success",
    messages: [],
    isOpen: false,
  },
};

export function messageReducer(
  state: IMessageState = initialMessageState,
  action: Action,
) {
  switch (action.type) {
    case MessageActionTypes.SHOW_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case MessageActionTypes.HIDE_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      return state;
  }
}
