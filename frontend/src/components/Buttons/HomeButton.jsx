// eslint-disable-next-line import/no-unresolved
import homeImg from "@assets/buttons/Home_button_graphisme_June_Design.png";

export default function HomeButton({ handleClick, clickedButton }) {
  return (
    <div aria-hidden="true" onClick={handleClick()} className="navButton">
      <img
        src={homeImg}
        alt="Home button"
        className={clickedButton ? "clickedButton" : "standardButton"}
      />
      <p className={clickedButton ? "textVisible" : "textHidden"}> Home </p>
    </div>
  );
}
