import Home from "@pages/HomePopUp";
import Settings from "@pages/Settings";
import Nav from "@components/Nav";
import TodoList from "@components/Home/ToDoList/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />

      <TodoList />

      <Settings />

      <Nav />
    </div>
  );
}

export default App;
