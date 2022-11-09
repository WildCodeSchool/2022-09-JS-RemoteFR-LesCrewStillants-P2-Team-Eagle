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

  const [dataToasts, setDataToasts] = useState([
    {
      picture: "./src/assets/MoodVeryGood.png",
      note: "blablabla",
      date: "04/11/2022",
    },
    {
      picture: "./src/assets/MoodGood.png",
      note: "blablabla zzzzzzzzz zzzzzzzz zzzzzz",
      date: "04/11/2022",
    },
    {
      picture: "./src/assets/MoodNotGoodNotBad.png",
      note: "blablablafezz zzzzzzzzz zzzzzzzzzzzz zzzzzzzzzzz zzzzzzzzzzzzz zzzzzzzz zzzzzz zzzzzzzzz zzzzzzzzzzzzzz zzzzzzzzzzzzzz zzzzzzzzzzzzzzzz zzzzzzzzzzzzzz zzzzzzzzzzzz",
      date: "04/11/2022",
    },
    {
      picture: "./src/assets/MoodBad.png",
      note: "blablabla",
      date: "04/11/2022",
    },
    {
      picture: "./src/assets/MoodVeryBad.png",
      note: "blablabla",
      date: "04/11/2022",
    },
  ]);

  const loadData = () => {
    if (!localStorage.getItem("mood")) return;
    const loadMood = JSON.parse(localStorage.getItem("mood"));
    setDataToasts(loadMood);
  };

  function saveMood() {
    localStorage.setItem("mood", JSON.stringify(dataToasts));
  }

  useEffect(() => {
    loadData();
    if (!localStorage.getItem("mood")) {
      saveMood();
    }
  });

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
      <HomePage clickedButtonHome={clickedButtonHome} dataToasts={dataToasts} />

      <Calendar clickedButtonCalendar={clickedButtonCalendar} />

      <Timeline
        clickedButtonTimeline={clickedButtonTimeline}
        dataToasts={dataToasts}
      />

      <Settings clickedButtonSettings={clickedButtonSettings} />

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
      />
    </div>
  );
}

export default App;
