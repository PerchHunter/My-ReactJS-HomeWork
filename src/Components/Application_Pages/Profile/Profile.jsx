import Checkbox from "@mui/material/Checkbox";

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCheckNameAction } from "../../Store/Profile/action";
import { profileSelector } from "../../Store/Profile/selectors";

export function Profile() {
  const dispatch = useDispatch();
  const { showName, name } = useSelector(profileSelector);

  const handleShowName = () => {
    dispatch(toggleCheckNameAction());
  };

  return (
    <Fragment>
      <h1>Страница профиля</h1>
      <Checkbox
        checked={showName}
        onChange={handleShowName}
        inputProps={{ "aria-label": "controlled" }}
      />
      {showName && <h2>{name}&#128515;</h2>}
    </Fragment>
  );
}
