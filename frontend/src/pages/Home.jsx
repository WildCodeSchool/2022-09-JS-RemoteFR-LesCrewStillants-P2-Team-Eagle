import TodoList from "@components/Home/ToDoList/TodoList";
import Weather from "@components/Weather";
import DailyMood from "@components/DailyMood";

export default function HomePage({
  clickedButtonHome,
  dataToasts,
  location,
  weather,
  setWeather,
  name,
}) {
  return (
    <section
      id="HomePage"
      className={clickedButtonHome ? "homeVisible" : "homeHidden"}
    >
      <Weather
        location={location}
        weather={weather}
        setWeather={setWeather}
        name={name}
      />
      <DailyMood dataToasts={dataToasts} />
      <TodoList />
    </section>
  );
}
