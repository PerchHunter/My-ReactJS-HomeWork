import { TextField, Button } from "@mui/material";

import { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  inputChangeNameAction,
  buttonChangeNameAction,
} from "../../Store/Profile/action";
import { profileSelector } from "../../Store/Profile/selectors";

export function Profile() {
  const dispatch = useDispatch();
  const { name, showName } = useSelector(profileSelector);

  const handleChangeName = (e) => {
    dispatch(inputChangeNameAction({ name: e.target.value }));
  };

  const toggleChangeName = useCallback(() => {
    dispatch(buttonChangeNameAction());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Страница профиля</h1>
      <TextField
        id="outlined-basic"
        label="Введите имя"
        variant="outlined"
        value={name}
        onChange={handleChangeName}
      />
      <Button variant="text" onClick={toggleChangeName}>
        Показать имя
      </Button>
      {showName && name}
    </Fragment>
  );
}
