import React, { useContext, useState } from "react";

import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { TodoCreate } from "./Components/TodoCreate/TodoCreate";
import { TodoProvider, todoContext } from "./Context/TodoProvider";
import { Modal } from "./Components/Modal/Modal";
import { Form } from "./Components/Form/Form";
import { Progresos } from "./Components/Progreso/Progresos";


export default function App() {
  return (
    <TodoProvider>
      <TodoCounter />
      <Progresos/>
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <TodoCreate />
      <todoContext.Consumer>
        {(context) => {
          const { openModal } = context;
          return (
            <>
              {openModal && (
                <Modal>
                  <Form />
                </Modal>
              )}
            </>
          );
        }}
      </todoContext.Consumer>
    </TodoProvider>
  );
}
