import { useState } from "react";
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
      <HomePage clickedButtonHome={clickedButtonHome} />

      <Calendar clickedButtonCalendar={clickedButtonCalendar} />

      <Timeline clickedButtonTimeline={clickedButtonTimeline} />

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
      />
    </div>
  );
}

export default App;
