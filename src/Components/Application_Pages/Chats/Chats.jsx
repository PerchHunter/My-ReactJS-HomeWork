import faker from "faker";
import Grid from "@mui/material/Grid";
import { MessageField } from "./MessageField";
import { Form } from "./Form";
import { ChatList } from "./ChatList";

import React, { Fragment, useState, useRef, useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { ROUTES } from "../../Menu/constants.js";

export function Chats(props) {
  const { chats, messageList, updateChats, updateMessages } = props;
  const { chatId } = useParams();

  const [message, setMessage] = useState("");

  const newMessage = {
    text: message,
    author: "Me",
    date: new Date().toLocaleTimeString(),
    id: faker.datatype.uuid(),
  };

  //если чата с таким параметром не находит,то возвращает noChat == undefined
  const noChat = chats.find((chat) => chat.id === chatId);

  const inputRef = useRef(null);

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();

    if (message === "") {
      inputRef.current?.focus();
      return;
    }

    updateMessages(
      !messageList[chatId]
        ? {
            ...messageList,
            [chatId]: [newMessage],
          }
        : {
            ...messageList,
            [chatId]: [...messageList[chatId], newMessage],
          }
    );
    setMessage("");
  };

  useMemo(() => {
    inputRef.current?.focus();

    const botsResponse = {
      text: faker.lorem.sentence(),
      author: "BOT",
      date: new Date().toLocaleTimeString(),
      id: faker.datatype.uuid(),
    };

    console.log(chatId);
    console.log(noChat);

    //при загрузке страницы /chats chatId - undefined и noChats - undefined
    //при вводе некорректного chatId chatId - введенный текст(true), noChat - undefined
    if ((!chatId && !noChat) || (chatId && !noChat)) {
      return;
    }

    if (
      messageList[chatId].length &&
      messageList[chatId][messageList[chatId].length - 1].author !== "BOT"
    ) {
      let timer;
      timer = setTimeout(() => {
        updateMessages({
          ...messageList,
          [chatId]: [...messageList[chatId], botsResponse],
        });
      }, 1300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [messageList[chatId]]);

  if (chatId && !noChat) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div className="chat">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ height: "100%" }}
      >
        <Grid item xs={3}>
          <ChatList chats={chats} chatId={chatId} updateChats={updateChats} />
        </Grid>
        <Grid item xs={9}>
          {chatId && (
            <Fragment>
              <MessageField messages={messageList[chatId]} />
              <Form
                inputRef={inputRef}
                message={message}
                changeMessage={changeMessage}
                addMessage={addMessage}
              />
            </Fragment>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
