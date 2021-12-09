import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Alert } from "@mui/material";

import { Menu } from "./Components/Menu";
import { Profile } from "./Components/Application_Pages/Profile";
import { Home } from "./Components/Application_Pages/Home";
import { Chats } from "./Components/Application_Pages/Chats";
import { ROUTES } from "./Components/Menu/constants.js";
import { persistor, store } from "./Components/Store";

import "./App.css";
import logo from "./logo.svg";
import { Fragment } from "react";
import { ChatListContainer } from "./Components/Application_Pages/Chats/ChatList";
import { AddChatContainer } from "./Components/Application_Pages/Chats/AddChat";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                <Route exact path={ROUTES.CHATS} render={() => <Chats />} />
                <Route
                  path={ROUTES.NO_CHAT}
                  render={() => (
                    <Fragment>
                      <Alert severity="info" color="info">
                        Такого чата не существует. Выберите нужный чат из списка
                        или добавьте новый
                      </Alert>
                      <ChatListContainer />
                      <AddChatContainer />
                    </Fragment>
                  )}
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
      </PersistGate>
    </Provider>
  );
}

export default App;
