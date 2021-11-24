import faker from "faker";

import "./App.css";
import logo from "./logo.svg";
import { MessageField } from "./Components/MessageField";
import { Form } from "./Components/Form";

import { useState, useEffect } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    author: "",
    date: "",
    id: "",
  });

  const createMessage = (e) => {
    setMessage({
      text: e.target.value,
      author: "Me",
      date: new Date().toLocaleTimeString(),
      id: faker.datatype.uuid(),
    });
  };

  const addMessage = () => {
    setMessageList([...messageList, message]);
    setMessage({
      text: "",
      author: "",
      date: "",
      id: "",
    });
  };

  useEffect(() => {
    const botsResponse = {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
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
          <MessageField messageList={messageList} />
          <Form
            messageList={messageList}
            message={message}
            createMessage={createMessage}
            addMessage={addMessage}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
