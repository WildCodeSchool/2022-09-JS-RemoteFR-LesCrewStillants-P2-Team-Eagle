import TodoList from "@components/Home/ToDoList/TodoList";
import DailyMood from "@components/DailyMood";

export default function HomePage({ clickedButtonHome }) {
  return (
    <section
      id="HomePage"
      className={clickedButtonHome ? "homeVisible" : "homeHidden"}
    >
      <DailyMood />
      <TodoList />
    </section>
  );
}
