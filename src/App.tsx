import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
import { Search } from "./SearchInput.component";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Home 24 - test</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
