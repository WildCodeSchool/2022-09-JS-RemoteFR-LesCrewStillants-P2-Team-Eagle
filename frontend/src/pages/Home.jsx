import TodoList from "@components/Home/ToDoList/TodoList";
import Weather from "@components/Weather";

export default function HomePage(clickedButtonHome) {
  return (
    <section
      id="HomePage"
      className={clickedButtonHome ? "homeVisible" : "homeHidden"}
    >
      <Weather />
      <TodoList />
    </section>
  );
}
