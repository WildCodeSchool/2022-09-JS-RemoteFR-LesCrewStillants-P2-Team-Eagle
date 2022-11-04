// eslint-disable-next-line import/no-unresolved
import settingsImg from "@assets/buttons/settingsButton.png";

export default function SettingsButton({ handleClick, clickedButton }) {
  return (
    <div aria-hidden="true" onClick={handleClick()} className="navButton">
      <img
        src={settingsImg}
        alt="Settings button"
        className={clickedButton ? "clickedButton" : "standardButton"}
      />
      <p className={clickedButton ? "textVisible" : "textHidden"}>Settings </p>
    </div>
  );
}
