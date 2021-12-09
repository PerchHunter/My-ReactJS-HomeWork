import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { chatListSelector } from "../../../Store/Chats/selectors";
import { ChatList } from "./ChatList";

export function ChatListContainer() {
  const chats = useSelector(chatListSelector);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ChatList
      chats={chats}
      handleClick={handleClick}
      dispatch={dispatch}
      open={open}
    />
  );
}
