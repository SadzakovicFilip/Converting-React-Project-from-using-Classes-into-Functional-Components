import { Component } from "react";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    //always runs first

    super();
    this.state = {
      monsters: [],
      searchedField: "",
    };
    console.log(`constructor`);
  }

  componentDidMount() {
    //this runs third
    console.log(`componentDidMount`);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchedString = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchedField: searchedString };
    });
  };

  render() {
    const { monsters, searchedField } = this.state;
    const { onSearchChange } = this;
    //this runs second
    console.log(`render`);

    const filterdMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchedField);
    });

    return (
      <div className="App">
        <h1 className="app-title">MonSter RosTer</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
