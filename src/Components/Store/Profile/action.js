import {
  INPUT_CHANGE_NAME_ACTION,
  BUTTON_CHANGE_NAME_ACTION,
} from "./constants.js";

export const inputChangeNameAction = ({ name }) => ({
  type: INPUT_CHANGE_NAME_ACTION,
  payload: { name },
});

export const buttonChangeNameAction = () => ({
  type: BUTTON_CHANGE_NAME_ACTION,
});

export const changeNameWithThunk = (payload) => (dispatch, getState) => {
  dispatch(inputChangeNameAction(payload));
};
