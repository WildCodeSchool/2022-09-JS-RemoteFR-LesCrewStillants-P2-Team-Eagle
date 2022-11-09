import TodoList from "@components/Home/ToDoList/TodoList";
import Weather from "@components/Weather";
import DailyMood from "@components/DailyMood";

export default function HomePage({ clickedButtonHome, dataToasts }) {
  return (
    <section
      id="HomePage"
      className={clickedButtonHome ? "homeVisible" : "homeHidden"}
    >
      <Weather />
      <DailyMood dataToasts={dataToasts} />
      <TodoList />
    </section>
  );
}
