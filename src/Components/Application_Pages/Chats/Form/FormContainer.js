import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addMessageFirebaseWithThunk,
  initFirebaseMessagesListWithThunk,
} from "../../../Store/Messages/action";
import { profileSelector } from "../../../Store/Profile/selectors";
import { Form } from "./Form";

export function FormContainer({ chatId }) {
  const [message, setMessage] = useState("");
  const { userName } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    dispatch(addMessageFirebaseWithThunk({ chatId, message, userName }));
    setMessage("");
  };

  useEffect(() => {
    dispatch(initFirebaseMessagesListWithThunk());
  }, [dispatch]);

  if (message === "") {
    inputRef.current?.focus();
  }
  return (
    <Form
      addMessage={addMessage}
      changeMessage={changeMessage}
      message={message}
      inputRef={inputRef}
    />
  );
}
