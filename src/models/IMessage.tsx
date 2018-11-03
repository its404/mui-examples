export default interface IMessage {
  messageType: string;
  messages: string[];
  isOpen: boolean;
  [key: string]: string | string[] | boolean;
}
