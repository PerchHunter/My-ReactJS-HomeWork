import faker from "faker";
import Grid from "@mui/material/Grid";
import { MessageField } from "./MessageField";
import { Form } from "./Form";
import { ChatList } from "./ChatList";

import { useState, useEffect, useRef } from "react";
import { useParams, Redirect } from "react-router-dom";
import { ROUTES } from "../../Menu/constants";

export function Chats(props) {
  const { chats, messageList, updateChats, updateMessages } = props;
  const { chatId } = useParams();
  console.log(chatId);

  const [message, setMessage] = useState("");

  const inputRef = useRef(null);

  const changeMessage = (e) => {
    setMessage({
      text: e.target.value,
      author: "Me",
      date: new Date().toLocaleTimeString(),
      id: faker.datatype.uuid(),
    });
  };

  const addMessage = (e) => {
    e.preventDefault();

    if (message.text === "") {
      inputRef.current?.focus();
      return;
    }

    updateMessages(
      !messageList[chatId]
        ? {
            ...messageList,
            [chatId]: [message],
          }
        : {
            ...messageList,
            [chatId]: [...messageList[chatId], message],
          }
    );
    // setMessage({
    //   text: "",
    //   author: "",
    //   date: "",
    //   id: "",
    // });

    // setChats(
    //   // chats.map((chat) => chat.id === chatId
    //   //   ? {
    //   //         ...chat,
    //   //        messages: [
    //   //          ...chat.messages,
    //   //          {/* новое сообщение */}
    //   //        ],
    //   //      }
    //   //   : chat))
    // )
  };

  useEffect(() => {
    inputRef.current?.focus();

    const botsResponse = {
      text: faker.lorem.sentence(),
      author: "BOT",
      date: new Date().toLocaleTimeString(),
      id: faker.datatype.uuid(),
    };

    if (
      messageList.length &&
      messageList[messageList.length - 1].author !== "BOT"
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
  }, [messageList]);

  // if (!chatId || !chats[chatId]) {
  //   return <Redirect to={ROUTES.NO_CHAT} />;
  // }

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
          <MessageField messages={messageList[chatId]} />
          <Form
            inputRef={inputRef}
            message={message}
            changeMessage={changeMessage}
            addMessage={addMessage}
          />
        </Grid>
      </Grid>
    </div>
  );
}
