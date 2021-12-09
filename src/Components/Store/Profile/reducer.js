import {
  INPUT_CHANGE_NAME_ACTION,
  BUTTON_CHANGE_NAME_ACTION,
} from "./constants";

const initialState = {
  name: "Сергей",
  showName: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CHANGE_NAME_ACTION: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case INPUT_CHANGE_NAME_ACTION: {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    default:
      return state;
  }
};
