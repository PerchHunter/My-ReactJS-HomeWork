import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants.js";

export const addMessageAction = ({ chatId, message, AUTHOR }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, message, AUTHOR },
});

export const deleteMessageAction = ({ deleteChat }) => ({
  type: DELETE_MESSAGE_ACTION,
  payload: { deleteChat },
});
