import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants.js";

export const addChatAction = ({ newChat }) => ({
  type: ADD_CHAT_ACTION,
  payload: { newChat },
});

export const deleteChatAction = ({ deleteChat }) => ({
  type: DELETE_CHAT_ACTION,
  payload: { deleteChat },
});
