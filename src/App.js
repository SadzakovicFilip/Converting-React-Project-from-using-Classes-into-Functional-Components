import { Component } from "react";

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
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    //this runs second
    console.log(`render`);

    const filterdMonsters = this.state.monsters.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchedField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            const searchedString = e.target.value.toLowerCase()
            this.setState(()=>{
              return{searchedField:searchedString}
            })
          }}
        />
        {filterdMonsters.map((item) => {
          return <h1 key={item.id}>{item.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
