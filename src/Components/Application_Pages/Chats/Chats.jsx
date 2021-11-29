import faker from "faker";
import Grid from "@mui/material/Grid";
import { MessageField } from "./MessageField";
import { Form } from "./Form";
import { ChatList } from "./ChatList";

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { CHATLIST } from "../../Menu/constants";

export function Chats() {
  const [chats] = useState(CHATLIST);
  const { chatId } = useParams();

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    author: "",
    date: "",
    id: "",
  });

  const inputRef = useRef(null);

  const changeMessage = (e) => {
    setMessage({
      text: e.target.value,
      author: "Me",
      date: new Date().toLocaleTimeString(),
      id: faker.datatype.uuid(),
    });
  };

  const addMessage = () => {
    if (message.text === "") {
      inputRef.current?.focus();
      return;
    }
    setMessageList([...messageList, message]);
    setMessage({
      text: "",
      author: "",
      date: "",
      id: "",
    });
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
        setMessageList([...messageList, botsResponse]);
      }, 1300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [messageList]);

  return (
    <div className="chat">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ height: "100%" }}
      >
        <Grid item xs={3}>
          <ChatList chats={chats} chatId={chatId} />
        </Grid>
        <Grid item xs={9}>
          <MessageField messageList={messageList} />
          <Form
            inputRef={inputRef}
            messageList={messageList}
            message={message}
            changeMessage={changeMessage}
            addMessage={addMessage}
          />
        </Grid>
      </Grid>
    </div>
  );
}
