import { useState } from "react";
import HomeButton from "./Buttons/HomeButton";
import CalendarButton from "./Buttons/CalendarButton";
import AddButton from "./Buttons/AddButton";
import TimelineButton from "./Buttons/TimelineButton";
import SettingsButton from "./Buttons/SettingsButton";

export default function Nav() {
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
    <div className="navContainer">
      <HomeButton
        handleClick={() => handleClickHome}
        clickedButton={clickedButtonHome}
      />
      <CalendarButton
        handleClick={() => handleClickCalendar}
        clickedButton={clickedButtonCalendar}
      />
      <AddButton />
      <TimelineButton
        handleClick={() => handleClickTimeline}
        clickedButton={clickedButtonTimeline}
      />
      <SettingsButton
        handleClick={() => handleClickSettings}
        clickedButton={clickedButtonSettings}
      />
    </div>
  );
}
