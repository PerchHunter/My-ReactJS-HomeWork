import * as React from "react";
import { useState, Fragment } from "react";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { addChatAction } from "../../../Store/Chats/action";

export function AddChat() {
  const [visible, setVisible] = useState(false);
  const [newChat, setNewChat] = useState("");

  const dispatch = useDispatch();

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const handleChange = (e) => setNewChat(e.target.value);
  const addChat = () => {
    dispatch(addChatAction({ newChat }));
    setNewChat("");
    handleClose();
  };

  return (
    <Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50px",
          borderRadius: "50%",
          backgroundColor: "#1565c0",
        }}
        variant={"circular"}
      >
        <AddIcon />
      </Fab>

      <Dialog open={visible} onClose={handleClose}>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Название нового чата"
              variant="standard"
              style={{ color: "#1565c0" }}
              value={newChat}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Button
          style={{ color: "#1565c0" }}
          onClick={addChat}
          disabled={!newChat}
        >
          Добавить чат
        </Button>
      </Dialog>
    </Fragment>
  );
}
