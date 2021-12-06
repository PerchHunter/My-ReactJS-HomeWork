import "./App.css";
import logo from "./logo.svg";

import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Menu } from "./Components/Menu";
import { Profile } from "./Components/Application_Pages/Profile";
import { Home } from "./Components/Application_Pages/Home";
import { Chats } from "./Components/Application_Pages/Chats";
import { ROUTES } from "./Components/Menu/constants.js";
import { store } from "./Components/Store";

function App() {
  return (
    <Provider store={store}>
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
              {/* CHAT - параметр URL */}
              <Route exact path={ROUTES.CHAT} render={() => <Chats />} />
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
    </Provider>
  );
}

export default App;
