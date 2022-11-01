// eslint-disable-next-line import/no-unresolved
import settingsImg from "@assets/buttons/settingsButton.png";
import { useState } from "react";

export default function SettingsButton() {
  const [clickedButton, setClickedButton] = useState(true);
  function handleClick() {
    setClickedButton(!clickedButton);
  }
  return (
    <div aria-hidden="true" onClick={handleClick} className="navButton">
      <img
        src={settingsImg}
        alt="Settings button"
        className={clickedButton ? "clickedButton" : "standardButton"}
      />
      <p className={clickedButton ? "textVisible" : "textHidden"}>Settings </p>
    </div>
  );
}
