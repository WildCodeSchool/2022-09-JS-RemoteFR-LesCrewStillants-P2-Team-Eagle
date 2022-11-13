import axios from "axios";
import { useState, useEffect } from "react";

import "./Weather.css";

export default function Weather() {
  // Objects Array, will contain background pictures and daily tip based on weather.
  const [weatherTip, setWeatherTip] = useState("");
  const [backgroundPicture, setBackgroundPicture] = useState("");

  const weatherExtra = [
    {
      weatherTip:
        "Sunshine is everywhere! Maybe you should take your sunglasses!",
      backgroundPicture: "./src/assets/MoodVeryGood.png",
    },
    {
      weatherTip:
        "There are just few clouds today! But sun rays are still there, don't let them deceives you!",
      backgroundPicture: "",
    },
    {
      weatherTip:
        "Half clouds, half sun. With such diversity nothing should happen today.",
      backgroundPicture: "",
    },
    {
      weatherTip:
        "Clouds... Clouds everywhere! It may rains if the clouds are dark!",
      backgroundPicture: "",
    },
    {
      weatherTip:
        "There's a bit of rain, but normally not too much. Covering your head should be enough.",
      backgroundPicture: "",
    },
    {
      weatherTip: "It's raining today! You should take an umbrella!",
      backgroundPicture: "",
    },
    {
      weatherTip: "There's a thunderstorm out there! Take care of lightning!",
      backgroundPicture: "",
    },
    {
      weatherTip:
        "Snow is falling today! You should put warm clothes and maybe do a snowman!",
      backgroundPicture: "",
    },
    {
      weatherTip: "It's foggy today, pay more attention than ever!",
      backgroundPicture: "",
    },
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
    if (
      weather.weather[0].icon === "01d" ||
      weather.weather[0].icon === "01n"
    ) {
      setWeatherTip(weatherExtra[0].weatherTip);
      setBackgroundPicture(weatherExtra[0].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "02d" ||
      weather.weather[0].icon === "02n"
    ) {
      setWeatherTip(weatherExtra[1].weatherTip);
      setBackgroundPicture(weatherExtra[1].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "03d" ||
      weather.weather[0].icon === "03n"
    ) {
      setWeatherTip(weatherExtra[2].weatherTip);
      setBackgroundPicture(weatherExtra[2].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "04d" ||
      weather.weather[0].icon === "04n"
    ) {
      setWeatherTip(weatherExtra[3].weatherTip);
      setBackgroundPicture(weatherExtra[3].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "09d" ||
      weather.weather[0].icon === "09n"
    ) {
      setWeatherTip(weatherExtra[4].weatherTip);
      setBackgroundPicture(weatherExtra[4].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "10d" ||
      weather.weather[0].icon === "10n"
    ) {
      setWeatherTip(weatherExtra[5].weatherTip);
      setBackgroundPicture(weatherExtra[5].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "11d" ||
      weather.weather[0].icon === "11n"
    ) {
      setWeatherTip(weatherExtra[6].weatherTip);
      setBackgroundPicture(weatherExtra[6].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "13d" ||
      weather.weather[0].icon === "13n"
    ) {
      setWeatherTip(weatherExtra[7].weatherTip);
      setBackgroundPicture(weatherExtra[7].backgroundPicture);
    }
    if (
      weather.weather[0].icon === "50d" ||
      weather.weather[0].icon === "50n"
    ) {
      setWeatherTip(weatherExtra[8].weatherTip);
      setBackgroundPicture(weatherExtra[8].backgroundPicture);
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
