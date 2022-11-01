// eslint-disable-next-line import/no-unresolved
import timelineImg from "@assets/buttons/VectorTimeline.png";
import { useState } from "react";

export default function TimelineButton() {
  const [clickedButton, setClickedButton] = useState(true);
  function handleClick() {
    setClickedButton(!clickedButton);
  }
  return (
    <div aria-hidden="true" onClick={handleClick} className="navButton">
      <img
        src={timelineImg}
        alt="Timeline button"
        className={clickedButton ? "clickedButton" : "standardButton"}
      />
      <p className={clickedButton ? "textVisible" : "textHidden"}> Timeline</p>
    </div>
  );
}
