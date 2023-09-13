import React, { useContext } from "react";
import "./TodoItem.css";
import { todoContext } from "../../Context/TodoProvider";

const defaultodos = [
  { text: "aprender react", completed: false },
  { text: "implementar backend python", completed: true },
];

export function TodoItem() {
  const { searchTodos, deleteTodo, completedTodo } = useContext(todoContext);
  return (
    <>
      {searchTodos.map((todo) => (
        <li className="TodoItem" key={todo.text}>
          <span
            className={`Icon Icon-check ${
              todo.completed && "Icon-check--active"
            }`}
            onClick={() => completedTodo(todo.text)}
          >
            v
          </span>
          <p
            className={`TodoItem-p ${
              todo.completed && "TodoItem-p--completed"
            }`}
          >
            {todo.text}
          </p>
          <span
            className="Icon Icon-Delete"
            onClick={() => deleteTodo(todo.text)}
          >
            x
          </span>
        </li>
      ))}
    </>
  );
}
