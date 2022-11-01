import settingsImg from "@assets/buttons/settingsButton.png";

export default function SettingsButton() {
  return (
    <div className="navButton">
      <img src={settingsImg} alt="Settings button" className="settingsButton" />
      <p>Settings </p>
    </div>
  );
}
