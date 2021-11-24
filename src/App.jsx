import faker from "faker";
import Grid from "@mui/material/Grid";

import "./App.css";
import logo from "./logo.svg";
import { MessageField } from "./Components/MessageField";
import { Form } from "./Components/Form";
import { NestedList } from "./Components/ChatList";

import { useState, useEffect, useRef } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    author: "",
    date: "",
    id: "",
  });

  const inputRef = useRef(null);

  const createMessage = (e) => {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="App-main">
        <div className="chat">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ height: "100%" }}
          >
            <Grid item xs={3}>
              <NestedList />
            </Grid>
            <Grid item xs={9}>
              <MessageField messageList={messageList} />
              <Form
                inputRef={inputRef}
                messageList={messageList}
                message={message}
                createMessage={createMessage}
                addMessage={addMessage}
              />
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}

export default App;
