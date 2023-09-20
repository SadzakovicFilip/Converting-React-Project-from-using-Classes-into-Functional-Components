import { Component } from "react";

class SearchBox extends Component(){
    render(){
        <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    }
}

export default SearchBox