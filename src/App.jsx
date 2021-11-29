import "./App.css";
import logo from "./logo.svg";

import { Menu } from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="App-main">
        <Menu />
      </main>
    </div>
  );
}

export default App;
