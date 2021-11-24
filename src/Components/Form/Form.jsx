import "./Form.css";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export function Form({ inputRef, addMessage, createMessage, message }) {
  return (
    <form id="submit-message" action="#" onSubmit={addMessage}>
      <TextField
        fullWidth
        autoFocus
        label="Введите сообщение..."
        id="fullWidth"
        color="info"
        onChange={createMessage}
        value={message.text}
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
      >
        Отправить
      </Button>
    </form>
  );
}
