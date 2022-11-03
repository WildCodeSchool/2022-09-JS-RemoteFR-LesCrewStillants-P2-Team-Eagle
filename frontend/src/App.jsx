import Home from "@pages/HomePopUp";
import Settings from "@pages/Settings";
import Journal from "@components/Journal";
import TodoList from "@components/TodoList";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import AppNav from "./AppNav";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <Home />

      <Journal />

      <Settings />
      <div className="container">
        <div className="app-wrapper">
          <div>
            <TodoList />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <TodosList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
      <AppNav />
    </div>
  );
}

export default App;
