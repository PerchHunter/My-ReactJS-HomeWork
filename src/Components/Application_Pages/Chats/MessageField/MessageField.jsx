import React, { useEffect } from "react";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { messageListSelector } from "../../../Store/Messages/selectors";
import "./MessageField.css";
import { addMessageAction } from "../../../Store/Messages/action";

export function MessageField({ chatId }) {
  const messages = useSelector(messageListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const AUTHOR = "BOT";
    const message = faker.lorem.sentence();

    //при первой загрузке страницы чата messages[chatId] == undefined, поэтому:
    if (!messages[chatId]) return;

    if (
      messages[chatId].length &&
      messages[chatId][messages[chatId].length - 1].author !== "BOT"
    ) {
      let timer;
      timer = setTimeout(() => {
        dispatch(addMessageAction({ chatId, message, AUTHOR }));
      }, 1300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, chatId, messages]);

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
