import HomeButton from "./Buttons/HomeButton";
import CalendarButton from "./Buttons/CalendarButton";
import AddButton from "./Buttons/AddButton";
import TimelineButton from "./Buttons/TimelineButton";
import SettingsButton from "./Buttons/SettingsButton";

import "./Nav.css";

export default function Nav({
  handleClickHome,
  clickedButtonHome,
  handleClickCalendar,
  clickedButtonCalendar,
  handleClickTimeline,
  clickedButtonTimeline,
  handleClickSettings,
  clickedButtonSettings,
  dataToasts,
  weather,
}) {
  return (
    <div className="navContainer">
      <HomeButton
        handleClick={() => handleClickHome()}
        clickedButton={clickedButtonHome}
      />
      <CalendarButton
        handleClick={() => handleClickCalendar()}
        clickedButton={clickedButtonCalendar}
      />
      <AddButton dataToasts={dataToasts} weather={weather} />
      <TimelineButton
        handleClick={() => handleClickTimeline()}
        clickedButton={clickedButtonTimeline}
      />
      <SettingsButton
        handleClick={() => handleClickSettings()}
        clickedButton={clickedButtonSettings}
      />
    </div>
  );
}
