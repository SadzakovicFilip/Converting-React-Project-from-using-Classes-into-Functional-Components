import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Franky",
        },
        {
          name: "Jacky",
        }
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((item, key) => {
          return <h1 key={key}>{item.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
