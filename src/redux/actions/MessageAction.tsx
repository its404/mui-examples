import IMessage from "app/models/IMessage";

export enum MessageActionTypes {
  SHOW_MESSAGE = "SHOW_MESSAGE",
  HIDE_MESSAGE = "HIDE_MESSAGE",
}

export interface IShowMessageAction {
  type: MessageActionTypes.SHOW_MESSAGE;
  payload: IMessage;
}

export interface IHideMessageAction {
  type: MessageActionTypes.HIDE_MESSAGE;
  payload: IMessage;
}

export function showMessage(
  messages: string[],
  messageType: string,
): IShowMessageAction {
  return {
    type: MessageActionTypes.SHOW_MESSAGE,
    payload: {
      messageType,
      messages,
      isOpen: true,
    },
  };
}

export function hideMessage(): IHideMessageAction {
  return {
    type: MessageActionTypes.HIDE_MESSAGE,
    payload: {
      messageType: "success",
      messages: [],
      isOpen: false,
    },
  };
}

export type Action = IShowMessageAction | IHideMessageAction;
