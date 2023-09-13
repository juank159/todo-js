import React, { useContext } from "react";
import "./TodoCounter.css";
import { todoContext } from "../../Context/TodoProvider";

export function TodoCounter() {
  const { todos } = useContext(todoContext);
  const total = todos.length;
  const completeTodo = todos.filter((todo) => todo.completed === true).length;

  return (
    <h1 className="counter">
      Haz completado <span>{completeTodo}</span> de <span>{total}</span> Tareas
    </h1>
  );
}
