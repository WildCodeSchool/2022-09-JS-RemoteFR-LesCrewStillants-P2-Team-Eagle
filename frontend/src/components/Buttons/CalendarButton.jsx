// eslint-disable-next-line import/no-unresolved
import calendarImg from "@assets/buttons/Calendar.png";
import { useState } from "react";

export default function CalendarButton() {
  const [clickedButton, setClickedButton] = useState(true);
  function handleClick() {
    setClickedButton(!clickedButton);
  }
  return (
    <div aria-hidden="true" onClick={handleClick} className="navButton">
      <img
        src={calendarImg}
        alt="Calendar button"
        className={clickedButton ? "clickedButton" : "standardButton"}
      />
      <p className={clickedButton ? "textVisible" : "textHidden"}> Calendar </p>
    </div>
  );
}
