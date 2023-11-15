import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
  src: string;
  alt: string;
};

const App = () => {
  const [searchedField, setSearchedField] = useState(``);
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((item) => {
      return item.name.toLowerCase().includes(searchedField);
    });

    setFilteredMonsters(newMonsters);
  }, [monsters, searchedField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchedString = event.target.value.toLowerCase();
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
