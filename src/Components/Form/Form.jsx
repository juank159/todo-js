import React, { useContext, useState } from "react";
import { todoContext } from "../../Context/TodoProvider";
import "./Form.css";

export function Form() {
  const { openModal, setOpenModal, addTodos} = useContext(todoContext);
  const [add, setadd] = useState('')
  console.log(add);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTodos(add)
        setOpenModal(false)
      }}
    >
      <label>Nueva Tarea</label>
      <textarea
        placeholder="escribe la nueva tarea"
        value={add}
        onChange={(event) => setadd(event.target.value)}
      />
      <div className="button-container">
        <button
          type=""
          className="button button-cancel"
          onClick={() => setOpenModal(!openModal)}
        >
          Cancelar
        </button>
        <button type="submit" className="button button-add">
          Añadir
        </button>
      </div>
    </form>
  );
}
