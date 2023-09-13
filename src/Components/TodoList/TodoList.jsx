import React, { useContext } from "react";
import "./TodoList.css";
import { todoContext } from "../../Context/TodoProvider";
import { Loading } from "../Loading/Loading";

export function TodoList({ children }) {
  const { loading, error, todos } = useContext(todoContext);
  return (
    <ul className="list">
      {loading && <Loading />}
      {children}
    </ul>
  );
}
