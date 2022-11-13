import axios from "axios";
import { useState, useEffect } from "react";

import "./Weather.css";

export default function Weather() {
  // Objects Array, will contain background pictures and daily tip based on weather.
  const [weatherTip, setWeatherTip] = useState("");
  const [backgroundPicture, setBackgroundPicture] = useState("");

  const weatherExtra = [
    { weatherTip: "tip 1", backgroundPicture: "./src/assets/MoodVeryGood.png" },
    { weatherTip: "tip 2", backgroundPicture: "" },
    { weatherTip: "tip 3", backgroundPicture: "" },
    { weatherTip: "tip 4", backgroundPicture: "" },
    { weatherTip: "tip 5", backgroundPicture: "" },
    { weatherTip: "tip 6", backgroundPicture: "" },
    { weatherTip: "tip 7", backgroundPicture: "" },
    { weatherTip: "tip 8", backgroundPicture: "" },
    { weatherTip: "tip 9", backgroundPicture: "" },
  ];

  // sample weather, in case nothing load
  const sampleWeather = {
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "Moderate rain",
        icon: "10d",
      },
    ],
    main: {
      temp: 20,
    },
    name: "Paris",
  };

  // Featch Api + useEffect when component load.
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

  useEffect(() => {
    switch (weather.weather[0].icon) {
      case "01d" || "01n":
        setWeatherTip(weatherExtra[0].weatherTip);
        setBackgroundPicture(weatherExtra[0].backgroundPicture);
        break;
      case "02d" || "02n":
        setWeatherTip(weatherExtra[1].weatherTip);
        setBackgroundPicture(weatherExtra[1].backgroundPicture);
        break;
      case "03d" || "03n":
        setWeatherTip(weatherExtra[2].weatherTip);
        setBackgroundPicture(weatherExtra[2].backgroundPicture);
        break;
      case "04d" || "04n":
        setWeatherTip(weatherExtra[3].weatherTip);
        setBackgroundPicture(weatherExtra[3].backgroundPicture);
        break;
      case "09d" || "09n":
        setWeatherTip(weatherExtra[4].weatherTip);
        setBackgroundPicture(weatherExtra[4].backgroundPicture);
        break;
      case "10d" || "10n":
        setWeatherTip(weatherExtra[5].weatherTip);
        setBackgroundPicture(weatherExtra[5].backgroundPicture);
        break;
      case "11d" || "11n":
        setWeatherTip(weatherExtra[6].weatherTip);
        setBackgroundPicture(weatherExtra[6].backgroundPicture);
        break;
      case "13d" || "13n":
        setWeatherTip(weatherExtra[7].weatherTip);
        setBackgroundPicture(weatherExtra[7].backgroundPicture);
        break;
      case "50d" || "50n":
        setWeatherTip(weatherExtra[8].weatherTip);
        setBackgroundPicture(weatherExtra[8].backgroundPicture);
        break;

      default:
        break;
    }
  }, [getWeather]);

  // Local storage load of User name
  const [name, setName] = useState("User");
  const loadData = () => {
    if (!localStorage.getItem("name")) return;

    const loadName = JSON.parse(localStorage.getItem("name"));

    setName(loadName);
  };

  useEffect(() => {
    loadData();
  });

  return (
    <section
      id="Weather"
      style={{ backgroundImage: `url(${backgroundPicture})` }}
    >
      <h1>Hello {name}!</h1>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="Today's weather"
        width="180px"
      />
      <h2>
        {weather.name}, {Math.floor(weather.main.temp)}°{" "}
      </h2>
      <p>{weather.weather[0].description}</p>
      <p>{weatherTip}</p>
    </section>
  );
}
