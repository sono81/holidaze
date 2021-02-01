import React from "react";
import { Link } from "react-router-dom";

function SearchBar({ handleSearch, value, id }) {
  const updateSearch = (input) => {
    handleSearch(input);
  };

  console.log(value);

  return (
    <>
      <input
        type="text"
        className="searchbar"
        placeholder="Find a place to stay..."
        onChange={(e) => updateSearch(e)}
      />

      <Link to={"establishment/" + id}>
        <div className="searchbar__results">{value}</div>
      </Link>
    </>
  );
}

export default SearchBar;
