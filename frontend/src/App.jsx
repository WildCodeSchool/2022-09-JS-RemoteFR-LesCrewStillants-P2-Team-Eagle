import { useState, useEffect } from "react";
import HomePage from "@pages/Home";
import Calendar from "@pages/Calendar";
import Timeline from "@pages/Timeline";
import Nav from "@components/Nav";
import Settings from "@pages/Settings";

import "./App.css";

function App() {
  const [clickedButtonHome, setClickedButtonHome] = useState(true);
  const [clickedButtonCalendar, setClickedButtonCalendar] = useState(false);
  const [clickedButtonTimeline, setClickedButtonTimeline] = useState(false);
  const [clickedButtonSettings, setClickedButtonSettings] = useState(false);

  const [location, setLocation] = useState("");

  // Sample weather in case API broken
  const sampleWeather = {
    weather: [
      {
        id: 501,
        main: "Rain",
        icon: "10d",
      },
    ],
    main: {
      temp: 20,
    },
    name: "Paris",
  };
  const [weather, setWeather] = useState(sampleWeather);

  const [dataToasts, setDataToasts] = useState([
    {
      picture: "./src/assets/MoodVeryGood.png",
      note: "This was my best day ever! 🎈🎢",
      date: "09/11/2022",
      iconWeather: "01d",
    },
    {
      picture: "./src/assets/MoodNotGoodNotBad.png",
      note: "I’m not always happy but when I am, I’m not.",
      date: "08/11/2022",
      iconWeather: "03d",
    },
    {
      picture: "./src/assets/MoodBad.png",
      note: "Everything went bad today... 😭",
      date: "07/11/2022",
      iconWeather: "11d",
    },
    {
      picture: "./src/assets/MoodGood.png",
      note: "That was such a good day! XOXO",
      date: "06/11/2022",
      iconWeather: "09d",
    },
    {
      picture: "./src/assets/MoodGood.png",
      note: "This is my first Entry! OwO",
      date: "05/11/2022",
      iconWeather: "50d",
    },
    {
      picture: "./src/assets/MoodVeryGood.png",
      note: "This is a test toast",
      iconWeather: "01d",
      date: "12/10/2022",
    },
  ]);

  // Mood load and save functions
  function loadData() {
    if (!localStorage.getItem("mood")) return;
    const loadMood = JSON.parse(localStorage.getItem("mood"));
    setDataToasts(loadMood);
  }

  function saveMood() {
    localStorage.setItem("mood", JSON.stringify(dataToasts));
  }

  useEffect(() => {
    loadData();
    if (!localStorage.getItem("mood")) {
      saveMood();
    }
  });

  // Function Load City for API and Settings
  function loadCity() {
    if (!localStorage.getItem("location")) {
      localStorage.setItem("location", JSON.stringify("Paris"));
    }

    const loadLocation = JSON.parse(localStorage.getItem("location"));

    setLocation(loadLocation);
  }

  useEffect(() => {
    loadCity();
  }, []);

  // Handle Menu functions
  function handleClickHome() {
    setClickedButtonHome(true);
    setClickedButtonCalendar(false);
    setClickedButtonTimeline(false);
    setClickedButtonSettings(false);
  }

  function handleClickCalendar() {
    setClickedButtonHome(false);
    setClickedButtonCalendar(true);
    setClickedButtonTimeline(false);
    setClickedButtonSettings(false);
  }

  function handleClickTimeline() {
    setClickedButtonHome(false);
    setClickedButtonCalendar(false);
    setClickedButtonTimeline(true);
    setClickedButtonSettings(false);
  }

  function handleClickSettings() {
    setClickedButtonHome(false);
    setClickedButtonCalendar(false);
    setClickedButtonTimeline(false);
    setClickedButtonSettings(true);
  }
  return (
    <div className="App">
      <HomePage
        clickedButtonHome={clickedButtonHome}
        dataToasts={dataToasts}
        location={location}
        weather={weather}
        setWeather={setWeather}
      />

      <Calendar
        clickedButtonCalendar={clickedButtonCalendar}
        dataToasts={dataToasts}
      />

      <Timeline
        clickedButtonTimeline={clickedButtonTimeline}
        dataToasts={dataToasts}
      />

      <Settings
        clickedButtonSettings={clickedButtonSettings}
        location={location}
        setLocation={setLocation}
      />

      <Nav
        handleClickHome={() => handleClickHome}
        clickedButtonHome={clickedButtonHome}
        handleClickCalendar={() => handleClickCalendar}
        clickedButtonCalendar={clickedButtonCalendar}
        handleClickTimeline={() => handleClickTimeline}
        clickedButtonTimeline={clickedButtonTimeline}
        handleClickSettings={() => handleClickSettings}
        clickedButtonSettings={clickedButtonSettings}
        dataToasts={dataToasts}
        weather={weather}
      />
    </div>
  );
}

export default App;
