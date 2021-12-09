import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addChatAction } from "../../../Store/Chats/action";
import { AddChat } from "./AddChat";

export function AddChatContainer() {
  const [visible, setVisible] = useState(false);
  const [newChat, setNewChat] = useState("");
  const dispatch = useDispatch();

  const handleToggleOpenClose = () => setVisible(!visible);
  const handleChange = (e) => setNewChat(e.target.value);
  const addChat = () => {
    dispatch(addChatAction({ newChat }));
    setNewChat("");
    handleToggleOpenClose();
  };

  return (
    <AddChat
      handleToggleOpenClose={handleToggleOpenClose}
      newChat={newChat}
      visible={visible}
      handleChange={handleChange}
      addChat={addChat}
    />
  );
}
