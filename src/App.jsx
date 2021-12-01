import "./App.css";
import logo from "./logo.svg";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Profile } from "./Components/Application_Pages/Profile";
import { Home } from "./Components/Application_Pages/Home";
import { Chats } from "./Components/Application_Pages/Chats";

import { ROUTES } from "./Components/Menu/constants.js";
import { useState } from "react";

const chatList = [
  {
    id: "chat1",
    name: "VoFront",
    avatar: "/img/1.jpg",
  },
  {
    id: "chat2",
    name: "ReactJS",
    avatar: "/img/2.jpg",
  },
  {
    id: "chat3",
    name: "Discoveer | Животные| Фильмы",
    avatar: "/img/3.jpg",
  },
  {
    id: "chat4",
    name: "Naked Space",
    avatar: "/img/4.jpg",
  },
  {
    id: "chat5",
    name: "Из истории русской культуры",
    avatar: "/img/5.jpg",
  },
  {
    id: "chat6",
    name: "Bloody Animals",
    avatar: "/img/6.jpg",
  },
  {
    id: "chat7",
    name: "Почему?",
    avatar: "/img/7.jpg",
  },
  {
    id: "chat8",
    name: "InvestFuture",
    avatar: "/img/8.jpg",
  },
  {
    id: "chat9",
    name: "СберИнвестиции",
    avatar: "/img/9.jpg",
  },
  {
    id: "chat10",
    name: "Физика Просто",
    avatar: "/img/10.jpg",
  },
  {
    id: "chat11",
    name: "Real Nature",
    avatar: "/img/11.jpg",
  },
];

const messages = {
  chat1: [],
  chat2: [],
  chat3: [],
  chat4: [],
  chat5: [],
  chat6: [],
  chat7: [],
  chat8: [],
  chat9: [],
  chat10: [],
  chat11: [],
};

function App() {
  const [chats, setChats] = useState(chatList);
  const [messageList, setMessageList] = useState(messages);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <main className="App-main">
          <Menu />

          <Switch>
            <Route exact path={ROUTES.HOME} render={() => <Home />} />
            <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
            <Route
              exact
              path={ROUTES.CHATS}
              render={() => (
                <Chats
                  chats={chats}
                  messageList={messageList}
                  updateChats={setChats}
                  updateMessages={setMessageList}
                />
              )}
            />
            {/* CHAT - параметр URL */}
            <Route
              exact
              path={ROUTES.CHAT}
              render={() => (
                <Chats
                  chats={chats}
                  messageList={messageList}
                  updateChats={setChats}
                  updateMessages={setMessageList}
                />
              )}
            />
            <Route
              path={ROUTES.NO_CHAT}
              render={() => <h1>Такого чата не существует</h1>}
            />
            <Route
              path={ROUTES.NOT_FOUND}
              render={() => <h1>404 Страница не найдена</h1>}
            />
            <Route>
              <Redirect to={ROUTES.NOT_FOUND}></Redirect>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
