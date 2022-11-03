import Home from "@pages/HomePopUp";
import TodoList from "@components/Home/ToDoList/TodoList";

export default function HomePage() {
  return (
    <section id="HomePage">
      <Home />

      <TodoList />
    </section>
  );
}
