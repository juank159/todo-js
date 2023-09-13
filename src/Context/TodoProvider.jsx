import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

export const todoContext = createContext();
export function TodoProvider({ children }) {
  // TodoCounter
  const {
    loading,
    error,
    itemTodo: todos,
    saveItem: saveTodos,
  } = useLocalStorage("defaultTodos", []);

  //TodoSearch
  const [searchValue, setSearchValue] = useState("");
  const searchTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  //Agregar Todos
  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  //Completando Todos
  const completedTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text === text);
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  };
  // eliminar Todos
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };
  // estado de Modal
  const [openModal, setOpenModal] = useState(false);
  return (
    <todoContext.Provider
      value={{
        searchTodos,
        setSearchValue,
        todos,
        error,
        loading,
        completedTodo,
        deleteTodo,
        setOpenModal,
        openModal,
        addTodos,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}
