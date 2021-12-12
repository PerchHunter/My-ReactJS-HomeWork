import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { addMessageWithThunk } from "../../../Store/Messages/action";
import { Form } from "./Form";

export function FormContainer({ chatId }) {
  const [message, setMessage] = useState("");
  const AUTHOR = "Me";
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();

    dispatch(addMessageWithThunk({ chatId, message, AUTHOR }));
    setMessage("");
  };

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
