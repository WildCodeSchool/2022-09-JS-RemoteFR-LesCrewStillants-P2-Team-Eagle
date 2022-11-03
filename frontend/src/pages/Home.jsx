import Home from "@pages/HomePopUp";
import TodoList from "@components/Home/ToDoList/TodoList";

export default function HomePage({ clickedButtonHome }) {
  return (
    <section
      id="HomePage"
      className={clickedButtonHome ? "homeVisible" : "homeHidden"}
    >
      <Home />

      <TodoList />
    </section>
  );
}
