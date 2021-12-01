import React from "react";
import "./MessageField.css";

export function MessageField({ messages }) {
  return (
    <div className="message-field">
      {messages?.map((message) => (
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
