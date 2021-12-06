import faker from "faker";
import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const { chatId, message, AUTHOR } = action.payload;
      const chatMessages = state.messageList[chatId] ?? [];

      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: [
            ...chatMessages,
            {
              text: message,
              author: AUTHOR,
              date: new Date().toLocaleTimeString(),
              id: faker.datatype.uuid(),
            },
          ],
        },
      };
    }
    case DELETE_MESSAGE_ACTION: {
      // преобразовываю messageList в массив [ [key , value], [key , value] ],
      // затем фильтром отбрасываю сообщения удалённого чата,
      //  затем fromEntries переводит этот массив обратно в объект
      const newMessageList = Object.fromEntries(
        Object.entries(state.messageList).filter((arrayKeyMessages) => {
          return arrayKeyMessages[0] !== action.payload.deleteChat;
        })
      );
      // console.log(newMessageList);
      return {
        ...state,
        messageList: { ...newMessageList },
      };
    }
    default:
      return state;
  }
};
