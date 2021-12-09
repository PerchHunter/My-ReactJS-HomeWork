import faker from "faker";
import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants.js";

export const addMessageAction = ({ chatId, message, AUTHOR }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, message, AUTHOR },
});

export const deleteMessageAction = ({ deleteChat }) => ({
  type: DELETE_MESSAGE_ACTION,
  payload: { deleteChat },
});

export const addMessageWithThunk = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));

  if (payload.AUTHOR !== "BOT") {
    setTimeout(() => {
      dispatch(
        addMessageAction({
          chatId: payload.chatId,
          message: faker.lorem.sentence(),
          AUTHOR: "BOT",
        })
      );
    }, 1300);
  }
};
