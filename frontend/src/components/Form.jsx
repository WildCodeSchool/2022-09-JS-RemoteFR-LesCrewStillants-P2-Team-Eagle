import React from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ input, setInput, todos, setTodos }) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), tittle: input, completed: false }]);
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Add To Do List ..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
