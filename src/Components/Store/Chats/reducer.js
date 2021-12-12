import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";
import faker from "faker";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: faker.datatype.uuid(),
            name: action.payload.newChat,
            avatar: `/img/${state.chatList.length + 1}.jpg`,
          },
        ],
      };
    }
    case DELETE_CHAT_ACTION: {
      const newChatList = state.chatList.filter((chat) => {
        return chat.id !== action.payload.deleteChat;
      });

      return {
        ...state,
        chatList: [...newChatList],
      };
    }
    default:
      return state;
  }
};
