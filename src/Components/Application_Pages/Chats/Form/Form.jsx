import React, { useRef, useState } from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import { useDispatch } from "react-redux";
import { addMessageAction } from "../../../Store/Messages/action";

export function Form({ chatId }) {
  const [message, setMessage] = useState("");
  const AUTHOR = "Me";
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();

    dispatch(addMessageAction({ chatId, message, AUTHOR }));
    setMessage("");
  };

  if (message === "") {
    inputRef.current?.focus();
  }

  return (
    <form id="submit-message" action="#" onSubmit={addMessage}>
      <TextField
        fullWidth
        autoFocus
        label="Введите сообщение..."
        id="fullWidth"
        color="info"
        onChange={changeMessage}
        value={message}
        inputRef={inputRef}
      />
      <Button
        className="button-chat"
        variant="contained"
        size={"small"}
        endIcon={<SendIcon />}
        type="submit"
        form="submit-message"
        disabled={!message}
        style={{ backgroundColor: "whitesmoke", marginLeft: "15px" }}
        onClick={addMessage}
      >
        Отправить
      </Button>
    </form>
  );
}
