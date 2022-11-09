import axios from "axios";
import { useState, useEffect } from "react";

export default function Weather() {
  const sampleWeather = {
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    main: {
      temp_min: 297.56,
      temp_max: 300.05,
    },
    name: "Paris",
  };
  const [weather, setWeather] = useState(sampleWeather);
  const getWeather = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=en&appid=4d1a6b3d37f082fd902170acfa8c7e1d&units=metric"
      )
      .then((res) => res.data)
      .then((data) => {
        setWeather(data);
      });
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div>
      <h1> {weather.name} </h1>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="Today's weather"
      />
      <p> {weather.weather[0].description} </p>
      {/* <li> Temperature min : {weather.main.temp_min} </li>
      <li> Temperature max : {weather.main.temp_max} </li> */}
    </div>
  );
}
