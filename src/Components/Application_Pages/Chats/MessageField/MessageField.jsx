import React from "react";
import { useSelector } from "react-redux";

import "./MessageField.css";
import { messageListSelector } from "../../../Store/Messages/selectors";

export function MessageField({ chatId }) {
  const messages = useSelector(messageListSelector);

  return (
    <div className="message-field">
      {messages[chatId]?.map((message) => (
        <div key={message.id} className="message">
          <div className="messageTime">
            <span>{message.author}</span>
            <span>{message.date}</span>
          </div>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
