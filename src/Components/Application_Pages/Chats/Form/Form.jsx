import React from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export function Form({ inputRef, addMessage, changeMessage, message }) {
  // const [focus, setFocus] = useState(true);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, [message, focus]);

  // const handleReset = (e) => {
  //   setMessageText("");
  //   inputRef.current?.focus();
  // };

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
        style={{ backgroundColor: "whitesmoke", marginLeft: "15px" }}
        onClick={addMessage}
      >
        Отправить
      </Button>
    </form>
  );
}
