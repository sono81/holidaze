import React from "react";

function SearchBar({ handleSearch }) {

  return (
    <input
      type="text"
      className="searchbar"
      placeholder="Find a place to stay..."
      onChange={(e) => handleSearch(e)}
    />
  );
}

export default SearchBar;
