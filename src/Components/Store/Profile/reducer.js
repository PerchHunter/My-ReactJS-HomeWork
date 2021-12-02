import { CHECK_NAME_ACTION } from "./constants";

const initialState = {
  name: "Привет, Егор!",
  showName: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_NAME_ACTION: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    default:
      return state;
  }
};
