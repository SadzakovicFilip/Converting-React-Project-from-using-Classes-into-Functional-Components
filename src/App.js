import { useEffect, useState } from "react";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
  const [searchedField, setSearchedField] = useState(``);
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchedField);
    });

    setFilteredMonsters(newMonsters);
  }, [monsters, searchedField]);

  const onSearchChange = (e) => {
    const searchedString = e.target.value.toLowerCase();
    setSearchedField(searchedString);
  };

  return (
    <div>
      <div className="App">
        <h1 className="app-title">MonSter RosTer</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    </div>
  );
};

export default App;
