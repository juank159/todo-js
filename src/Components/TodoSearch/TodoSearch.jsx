import React, { useContext } from "react";
import "./TodoSearch.css";
import { todoContext } from "../../Context/TodoProvider";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(todoContext);
  return (
    <input
      className="search"
      placeholder="Search"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}
