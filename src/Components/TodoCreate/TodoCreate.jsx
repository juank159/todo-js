import React, { useContext } from "react";
import "./TodoCreate.css";
import { todoContext } from "../../Context/TodoProvider";

export function TodoCreate() {
  const { todos, setOpenModal, openModal } = useContext(todoContext);
  const check = todos.length <= 0;
  return (
    <button
      className={`pulse ${check ? "create-empty" : "create"}`}
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  );
}
