// eslint-disable-next-line import/no-unresolved
import homeImg from "@assets/buttons/Home_button_graphisme_June_Design.png";
import { useState } from "react";

export default function HomeButton() {
  const [home, setHome] = useState(true);
  function handleHome() {
    setHome(!home);
  }

  return (
    <div aria-hidden="true" onClick={handleHome} className="navButton">
      <img
        src={homeImg}
        alt="Home button"
        className={home ? "clickedButton" : "standardButton"}
      />
      <p className={home ? "textVisible" : "textHidden"}> Home </p>
    </div>
  );
}
